/* THE ONLY SCRIPT the redesign adds. One IIFE: the copy button, and the
   scroll-spy that feeds both networks — the hero MLP and the mini-MLP in the
   bar — plus the outline highlight on the post. No library, and no scroll
   handler: an IntersectionObserver marks the section in view, and the forward
   path lit for it is a pure function of its index, so a section always lights
   the same chain rather than re-randomising on every frame. With JS off none
   of this is needed: the first output unit is already lit in the markup, the
   copy button stays hidden, and no outline item is marked — never a wrong one,
   never a blank box. Transitions are colour and opacity only, and CSS
   suppresses even those under prefers-reduced-motion.

   ONE line differs from the design file, marked JEKYLL below: the mock-up held
   all six views in a single document and switched between them with
   [data-page], so the spy scoped itself to the visible one. Here each view is
   its own route, so it falls back to #main — the same element, reached the way
   a real site reaches it.

   ONE STEP IS ADDED, marked INTEGRATION: step 0, the Markdown pass. The design
   hand-wrote its headings, its outline and its one listing; a real post and a
   real project page arrive as kramdown output instead, so those three pieces
   of furniture have to be hung on the rendered body. It lives here, once, and
   runs over every [data-prose] body on the page — rather than in two inline
   <script> blocks in two layouts, which is where the port first put it. */
(function(){
 var d=document,root=d.documentElement;

 /* === 0. INTEGRATION — THE MARKDOWN PASS ===
    Three jobs the design does in its markup and a rendered Markdown body
    cannot: the spectrogram rule under each h2, the outline built from the
    headings that are actually there, and a .codeblock wrapper round each
    listing so the copy button below has something to bind to. Every one is
    progressive enhancement: with JS off there are no bands, no outline and no
    copy button — never a broken band, never an empty outline box, never a
    dead control.

    The scope is [data-prose], which _layouts/blog_post.html puts on the
    post's .postcontent and _layouts/redesign-project.html on the project's
    article. The outline is built only where the layout has provided a
    .tocwrap for it, so the project page gets rules and listings and no
    outline, which is what it wants.

    .legacy — the kept routes and the talk/teaching detail pages — is listed
    too, but for the LISTINGS ONLY (0c): those pages were decided to get the
    new palette, measures and furniture and no bespoke design, so they take
    the copy button and the un-carded listing and no spectrogram bands. The
    matching CSS in _sass/redesign/_post.scss carries the same two scopes. */
 (function(){
  var bodies=d.querySelectorAll("[data-prose],.legacy"),SG=["sg3","sg6","sg4","sg1","sg2","sg5"];
  for(var s=0;s<bodies.length;s++){
   var scope=bodies[s],
       full=scope.hasAttribute("data-prose"),
       hs=[].slice.call(scope.querySelectorAll("h2,h3")),i;

   if(full){
    /* 0a. THE RULE UNDER EVERY h2, cycling the six envelopes so no two
       adjacent sections carry the same band. */
    for(var r=0,j=0;j<hs.length;j++){
     if(hs[j].tagName!=="H2")continue;
     var rule=d.createElement("div");
     rule.className="rule";rule.setAttribute("aria-hidden","true");
     rule.innerHTML='<svg><use href="#'+SG[r%SG.length]+'"></use></svg>';r++;
     hs[j].parentNode.insertBefore(rule,hs[j].nextSibling);
    }

    /* 0b. THE OUTLINE. kramdown gives every heading an id already; the
       fallback is only for one that somehow has none. The wrapper stays
       hidden until at least one entry exists, so an outline is never an
       empty box. Only a layout that provided a .tocwrap gets one. */
    var wrap=d.querySelector(".tocwrap"),ol=wrap?wrap.querySelector(".toc ol"):null,n=0;
    if(ol&&!ol.children.length){
     for(i=0;i<hs.length;i++){
      var h=hs[i];
      if(!h.id){h.id=h.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");}
      var li=d.createElement("li");
      if(h.tagName==="H3")li.className="sub";
      var a=d.createElement("a");
      a.href="#"+h.id;a.textContent=h.textContent;
      li.appendChild(a);ol.appendChild(li);n++;
     }
     if(n)wrap.removeAttribute("hidden");
    }
   }

   /* 0c. THE LISTINGS — on EVERY prose body, legacy included. Rouge runs with
      line numbers, so one listing is
          pre.highlight > code > table
              > td.rouge-gutter > pre.lineno
              > td.rouge-code   > pre
      three <pre> elements, only the last of which is the code. Take the
      OUTERMOST pre (the one with no <pre> above it), climb past the highlight
      wrappers, and wrap THAT in the design's .codeblock.

      The button goes inside td.rouge-code, not beside the block: what step 1
      copies is b.parentNode.querySelector("pre"), and from there that is the
      code cell's own <pre> — the line numbers never reach the clipboard. It
      still paints top-right, because .copy is absolute and the nearest
      positioned ancestor is the listing's own box. */
   var pres=scope.querySelectorAll("pre");
   for(i=0;i<pres.length;i++){
    var node=pres[i],p=node.parentNode,nested=false;
    while(p&&p!==scope){if(p.nodeName==="PRE"){nested=true;break;}p=p.parentNode;}
    if(nested)continue;
    while((p=node.parentNode)&&p!==scope&&p.nodeName==="DIV"&&/highlight/.test(p.className||"")){node=p;}
    if(!node.parentNode||/codeblock/.test(node.parentNode.className||""))continue;
    var box=d.createElement("div");
    box.className="codeblock";
    node.parentNode.insertBefore(box,node);
    box.appendChild(node);
    var btn=d.createElement("button");
    btn.className="copy";btn.type="button";btn.hidden=true;
    btn.setAttribute("aria-label","Copy the code listing to the clipboard");
    btn.textContent="Copy";
    (box.querySelector("td.rouge-code")||box).appendChild(btn);
   }
  }
 })();

 /* 1. THE COPY BUTTON — only if the clipboard API is genuinely there, so
    there is never a dead control. */
 if(navigator.clipboard&&navigator.clipboard.writeText){
  var bs=d.querySelectorAll(".codeblock .copy");
  for(var i=0;i<bs.length;i++)(function(b){
   var pre=b.parentNode.querySelector("pre"),lab=b.getAttribute("aria-label"),t;
   if(!pre)return;
   b.removeAttribute("hidden");
   function reset(){b.textContent="Copy";b.removeAttribute("data-copied");b.setAttribute("aria-label",lab);}
   b.addEventListener("click",function(){
    navigator.clipboard.writeText(pre.textContent).then(function(){
     b.textContent="Copied";b.setAttribute("data-copied","");
     b.setAttribute("aria-label","Code copied to the clipboard");
     clearTimeout(t);t=setTimeout(reset,1500);
    },function(){
     b.textContent="Copy failed";clearTimeout(t);t=setTimeout(reset,1500);
    });
   });
  })(bs[i]);
 }

 /* 2. THE TWO NETWORKS. Node coordinates, in their own user units. */
 var hero=d.querySelector(".mlp"),mini=d.querySelector(".minimlp");
 var IN=[78,118,158],H=[40,79,118,157,196],OUT=[34,62,90,118,146,174,202];
 var mIN=[13,20,27],mH=[6,13,20,27,34],mOUT=[4,9.3,14.7,20,25.3,30.7,36];
 var outs=hero?hero.querySelectorAll(".out"):[],
     fwd=hero?hero.querySelector(".fwd"):null,
     fdot=hero?hero.querySelectorAll(".fdot circle"):[],
     mnod=mini?mini.querySelectorAll(".mm-n"):[],
     mpath=mini?mini.querySelector(".mm-p"):null,
     mdot=mini?mini.querySelectorAll(".mm-d"):[];

 /* DETERMINISTIC per output index: a fixed hash of i picks the contributing
    input and hidden units, so the same section lights the same path every
    time — no re-draw, no drift. */
 function chain(i){return [(i*5+2)%3,(i*3+1)%5,(i*2+3)%5];}
 function at(c,x,y){c.setAttribute("cx",x);c.setAttribute("cy",y);}
 function only(list,k){for(var n=0;n<list.length;n++)list[n].classList.toggle("on",n===k);}

 var cur=-1;
 function light(i){
  if(i===cur)return; cur=i;
  var c=chain(i),a=c[0],b=c[1],e=c[2],k;
  if(outs.length){k=i%outs.length;only(outs,k);
   if(fwd)fwd.setAttribute("d","M16 "+IN[a]+" L128 "+H[b]+" L248 "+H[e]+" L368 "+OUT[k]);
   if(fdot.length>2){at(fdot[0],16,IN[a]);at(fdot[1],128,H[b]);at(fdot[2],248,H[e]);}}
  if(mnod.length){k=i%mnod.length;only(mnod,k);
   if(mpath)mpath.setAttribute("d","M5 "+mIN[a]+" L26 "+mH[b]+" L50 "+mOUT[k]);
   if(mdot.length>1){at(mdot[0],5,mIN[a]);at(mdot[1],26,mH[b]);}}
 }

 /* 3. ONE SCROLL-SPY drives all of it — the hero network, the mark in the
    bar, and the outline on the post. On home the targets are the seven
    section headings; elsewhere they are the entries that view marks with
    data-spy, plus its headings; failing both, its entries. */
 var view=root.getAttribute("data-view")||"home",
     /* JEKYLL: [data-page] only exists if markup was lifted straight from the
        design; on a real route the view IS the page, so #main is the scope. */
     page=d.querySelector('[data-page="'+view+'"]')||d.getElementById("main"),
     toc=d.querySelectorAll(".toc a");
 if(!page||!("IntersectionObserver" in window))return;
 var targets=[].slice.call(page.querySelectorAll("[data-spy],h2[id],h3[id]"));
 if(!targets.length)targets=[].slice.call(page.querySelectorAll(".entry,.wrow,.cell,.list--d > li"));
 if(!targets.length)return;

 function mark(i){
  light(i);
  var id=targets[i].id;
  for(var n=0;n<toc.length;n++)toc[n].classList.toggle("on",!!id&&toc[n].getAttribute("href")==="#"+id);
 }

 var fs=parseFloat(getComputedStyle(root).fontSize)||18,
     nav=parseFloat(getComputedStyle(root).getPropertyValue("--navh"))||6.6,
     above=[];
 /* THE NEAREST TARGET ABOVE THE FOLD. The observer root is the viewport less
    the sticky bar at the top and 55% at the bottom, so rootBounds.bottom IS
    the reading line. Every delivered entry reports where its own top sits
    against that line — and a target crosses the line exactly when it fires,
    so the record is never stale. The LAST target still above the line is the
    one being read. Before the first one crosses — the very top of a page —
    k is -1 and NOTHING is marked, which is also precisely what a reader with
    no JavaScript sees: never a wrong item, only no item. */
 var io=new IntersectionObserver(function(es){
  for(var n=0;n<es.length;n++){
   var i=targets.indexOf(es[n].target); if(i<0)continue;
   var rb=es[n].rootBounds,line=rb?rb.bottom:(window.innerHeight||0)*.45;
   above[i]=es[n].boundingClientRect.top<line;
  }
  for(var k=-1,j=0;j<targets.length;j++)if(above[j])k=j;
  if(k>=0)mark(k);
 },{rootMargin:"-"+Math.round(nav*fs)+"px 0px -55% 0px",threshold:0});
 for(var t=0;t<targets.length;t++)io.observe(targets[t]);
})();
