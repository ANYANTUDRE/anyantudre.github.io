(function(){
 var d=document,root=d.documentElement;

 var T={copy:"Copy",copied:"Copied",copy_failed:"Copy failed",
        copy_aria:"Copy the code listing to the clipboard",
        copied_aria:"Code copied to the clipboard",
        scroll_region:"Scrollable region"};
 try{
  var tn=d.getElementById("ui-strings");
  if(tn&&tn.textContent){
   var tj=JSON.parse(tn.textContent);
   for(var tk in tj)if(tj[tk])T[tk]=tj[tk];
  }
 }catch(e){}

 (function(){
  var bodies=d.querySelectorAll("[data-prose],.legacy"),SG=["sg3","sg6","sg4","sg1","sg2","sg5"];
  for(var s=0;s<bodies.length;s++){
   var scope=bodies[s],
       full=scope.hasAttribute("data-prose"),
       hs=[].slice.call(scope.querySelectorAll("h2,h3")),i;

   if(full){
    for(var r=0,j=0;j<hs.length;j++){
     if(hs[j].tagName!=="H2")continue;
     var rule=d.createElement("div");
     rule.className="rule";rule.setAttribute("aria-hidden","true");
     rule.innerHTML='<svg><use href="#'+SG[r%SG.length]+'"></use></svg>';r++;
     hs[j].parentNode.insertBefore(rule,hs[j].nextSibling);
    }

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
    btn.setAttribute("aria-label",T.copy_aria);
    btn.textContent=T.copy;
    (box.querySelector("td.rouge-code")||box).appendChild(btn);
   }
  }
 })();

 (function(){
  var SEL="pre, .chartwrap, .eqn, .colo-m",pending;
  function mark(){
   var xs=d.querySelectorAll(SEL),i,el;
   for(i=0;i<xs.length;i++){
    el=xs[i];
    if(el.nodeName==="PRE"&&el.querySelector("table.rouge-table"))continue;
    if(el.scrollWidth>el.clientWidth+1){
     if(el.getAttribute("data-scrollable"))continue;
     el.setAttribute("data-scrollable","");
     el.setAttribute("tabindex","0");
     el.setAttribute("role","region");
     el.setAttribute("aria-label",T.scroll_region);
    }else if(el.hasAttribute("data-scrollable")){
     el.removeAttribute("data-scrollable");
     el.removeAttribute("tabindex");
     el.removeAttribute("role");
     el.removeAttribute("aria-label");
    }
   }
  }
  mark();
  window.addEventListener("resize",function(){
   clearTimeout(pending);pending=setTimeout(mark,200);
  });
 })();

 (function(){
  var here=location.host;
  function sweep(){
   var as=d.getElementsByTagName("a");
   for(var i=0;i<as.length;i++){
    var a=as[i];
    if(!a.host||a.host===here)continue;
    if(!/^https?:$/.test(a.protocol))continue;
    var tg=a.getAttribute("target");
    if(tg&&!/^_(self|top|parent)$/.test(tg))continue;
    a.setAttribute("target","_blank");
    a.setAttribute("rel",(a.getAttribute("rel")?a.getAttribute("rel")+" ":"")+"noopener noreferrer");
   }
  }
  sweep();
  if(!window.MutationObserver)return;
  var pending,mo=new MutationObserver(function(){
   clearTimeout(pending);pending=setTimeout(sweep,150);
  });
  mo.observe(d.body,{childList:true,subtree:true});
  setTimeout(function(){clearTimeout(pending);sweep();mo.disconnect();},15000);
 })();

 if(navigator.clipboard&&navigator.clipboard.writeText){
  var bs=d.querySelectorAll(".codeblock .copy");
  for(var i=0;i<bs.length;i++)(function(b){
   var pre=b.parentNode.querySelector("pre"),lab=b.getAttribute("aria-label"),t;
   if(!pre)return;
   b.removeAttribute("hidden");
   function reset(){b.textContent=T.copy;b.removeAttribute("data-copied");b.setAttribute("aria-label",lab);}
   b.addEventListener("click",function(){
    navigator.clipboard.writeText(pre.textContent).then(function(){
     b.textContent=T.copied;b.setAttribute("data-copied","");
     b.setAttribute("aria-label",T.copied_aria);
     clearTimeout(t);t=setTimeout(reset,1500);
    },function(){
     b.textContent=T.copy_failed;clearTimeout(t);t=setTimeout(reset,1500);
    });
   });
  })(bs[i]);
 }

 var hero=d.querySelector(".mlp"),mini=d.querySelector(".minimlp");

 function hsh(){
  var x=0,i;
  for(i=0;i<arguments.length;i++){
   x=(x+arguments[i]+1)|0;
   x^=x<<13;x|=0; x^=x>>>17; x^=x<<5;x|=0;
  }
  return ((x>>>0)%100000)/100000;
 }

 var FC={};
 function field(k,sizes){
  var key=sizes.join("-")+":"+k;
  if(FC[key])return FC[key];
  var L=sizes.length,rel=[],ed=[],l,a,b,g,w,m;
  rel[L-1]=[];
  for(b=0;b<sizes[L-1];b++)rel[L-1][b]=(b===k)?1:0.06;
  for(l=L-2;l>=0;l--){
   var dep=L-1-l,na=sizes[l],nb=sizes[l+1],row=[];
   rel[l]=[];
   for(a=0;a<na;a++){
    m=0;
    for(b=0;b<nb;b++){
     g=0.14+0.86*hsh(k,dep,a,b);
     w=rel[l+1][b]*g;
     row[a*nb+b]=w;
     if(w>m)m=w;
    }
    rel[l][a]=0.16+0.84*m;
   }
   ed[l]=row;
  }
  FC[key]={e:ed,n:rel};
  return FC[key];
 }

 function wire(svg,sizes,esel,nsel){
  if(!svg)return null;
  var e=[],n=[],l,i,el,q;
  for(l=0;l<sizes.length;l++){n[l]=[];if(l<sizes.length-1)e[l]=[];}
  q=svg.querySelectorAll(esel);
  for(i=0;i<q.length;i++){el=q[i];
   l=+el.getAttribute("data-l");
   if(e[l])e[l][(+el.getAttribute("data-a"))*sizes[l+1]+(+el.getAttribute("data-b"))]=el;}
  q=svg.querySelectorAll(nsel);
  for(i=0;i<q.length;i++){el=q[i];
   l=+el.getAttribute("data-n");
   if(n[l])n[l][+el.getAttribute("data-k")]=el;}
  return {svg:svg,sizes:sizes,e:e,n:n,k:-1,
          outs:[].slice.call(svg.querySelectorAll(".out"))};
 }

 var heroNet=wire(hero,[3,5,5,7],".edge[data-l]",".node[data-n]"),
     miniNet=wire(mini,[3,5,7],".mm-e[data-l]",".mm-n[data-n]");

 function paint(net,k){
  if(!net||net.k===k)return;
  net.k=k;
  var f=field(k,net.sizes),l,i,row,els;
  for(l=0;l<f.e.length;l++){row=f.e[l];els=net.e[l];
   for(i=0;i<row.length;i++)if(els[i])els[i].style.setProperty("--w",row[i].toFixed(3));}
  for(l=0;l<f.n.length;l++){row=f.n[l];els=net.n[l];
   for(i=0;i<row.length;i++)if(els[i])els[i].style.setProperty("--w",row[i].toFixed(3));}
  for(i=0;i<net.outs.length;i++)net.outs[i].classList.toggle("on",i===k);
 }

 var NOUT=7,spy=-1,hov=-1;
 function show(){
  var k=hov>=0?hov:(spy>=0?spy:0);
  paint(heroNet,k);paint(miniNet,k);
 }

 function bindUnits(net){
  if(!net||!net.outs.length)return;
  var sv=net.svg;
  var unit=function(t){
   while(t&&t!==sv){
    if(t.getAttribute&&t.getAttribute("data-i")!==null&&/(^|\s)out(\s|$)/.test(t.getAttribute("class")||""))
     return +t.getAttribute("data-i");
    t=t.parentNode;
   }
   return -1;
  };
  var enter=function(e){var i=unit(e.target);if(i>=0&&i!==hov){hov=i;show();}},
      leave=function(e){var i=unit(e.relatedTarget);if(i!==hov){hov=i;show();}};
  sv.addEventListener("mouseover",enter);
  sv.addEventListener("mouseout",leave);
  sv.addEventListener("focusin",enter);
  sv.addEventListener("focusout",leave);
 }
 bindUnits(heroNet);
 bindUnits(miniNet);

 if(hero&&heroNet){
  var VB_WIDE="-140 0 668 236",VB_PHONE="-140 0 516 236",
      mqp=window.matchMedia?window.matchMedia("(max-width:639px)"):null;
  var decor=function(){
   var p=mqp?mqp.matches:false,i;
   if(p)hero.setAttribute("aria-hidden","true");else hero.removeAttribute("aria-hidden");
   hero.setAttribute("viewBox",p?VB_PHONE:VB_WIDE);
   for(i=0;i<heroNet.outs.length;i++){
    if(p)heroNet.outs[i].setAttribute("tabindex","-1");
    else heroNet.outs[i].removeAttribute("tabindex");
   }
  };
  decor();
  if(mqp){
   if(mqp.addEventListener)mqp.addEventListener("change",decor);
   else if(mqp.addListener)mqp.addListener(decor);
  }
 }

 if(mini&&miniNet&&miniNet.outs.length){
  var mqm=window.matchMedia?window.matchMedia("(min-width:960px) and (any-pointer:fine)"):null;
  var promote=function(){
   var live=mqm?mqm.matches:false,i;
   if(live)mini.removeAttribute("aria-hidden");else mini.setAttribute("aria-hidden","true");
   for(i=0;i<miniNet.outs.length;i++){
    if(live)miniNet.outs[i].removeAttribute("tabindex");
    else miniNet.outs[i].setAttribute("tabindex","-1");
   }
  };
  promote();
  if(mqm){
   if(mqm.addEventListener)mqm.addEventListener("change",promote);
   else if(mqm.addListener)mqm.addListener(promote);
  }
 }

 var view=root.getAttribute("data-view")||"home",
     page=d.querySelector('[data-page="'+view+'"]')||d.getElementById("main"),
     toc=d.querySelectorAll(".toc a");
 var idOf={},oi;
 if(heroNet)for(oi=0;oi<heroNet.outs.length;oi++){
  var hr=heroNet.outs[oi].getAttribute("href")||"";
  if(hr.charAt(0)==="#")idOf[hr.slice(1)]=oi;
 }
 show();

 if(!page||!("IntersectionObserver" in window))return;
 var targets=[].slice.call(page.querySelectorAll("[data-spy],h2[id],h3[id]"));
 if(!targets.length)targets=[].slice.call(page.querySelectorAll(".entry,.wrow,.cell,.list--d > li"));
 if(!targets.length)return;

 function mark(i){
  var id=targets[i].id,k;
  k=(id&&Object.prototype.hasOwnProperty.call(idOf,id))?idOf[id]:i%NOUT;
  if(k!==spy){spy=k;show();}
  for(var n=0;n<toc.length;n++)toc[n].classList.toggle("on",!!id&&toc[n].getAttribute("href")==="#"+id);
 }

 var fs=parseFloat(getComputedStyle(root).fontSize)||18,
     nav=parseFloat(getComputedStyle(root).getPropertyValue("--navh"))||6.6,
     above=[];
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
