---
layout: redesign-default
view: blog
title: "Writing"
description: "Paper reviews and tutorials on deep learning, computer vision and speech for low-resource languages — every post written in both English and French."
permalink: /blog/
---
{%- comment -%}
  THE BLOG INDEX — the design's `blog` view, driven entirely by _posts.

  English posts only: every post is written twice rather than translated once,
  so the French twin carries lang: fr and is reached from its English row's
  [ FR ] link, never listed on its own.

  The rows are GROUPED BY the post's first category — paper_review, tutorial —
  and each group gets the design's heading + spectrogram rule. Groups are
  sorted by name, which puts Paper reviews before Tutorials and gives any
  future category a deterministic place rather than whichever post happened to
  be published last. Within a group the posts run oldest first, as the design
  has them.

  Each row is title-only: the margin column carries the post's own hero image
  as a 3:2 thumbnail, then its tags; the row itself carries the date, the
  title, and [ EN ] [ FR ] · N min read. Nothing here is written by hand —
  title, date, tags, image and the French twin all come from front matter.
{%- endcomment -%}
{%- assign en_posts = site.posts | where_exp: "p", "p.lang != 'fr'" -%}
{%- assign groups = en_posts | group_by_exp: "p", "p.categories[0]" | sort: "name" -%}

<article class="col">

 <span class="marginnote"><span class="mn-label">Both languages</span>Every post exists in English and French, written twice rather than translated once. The title goes to the English one, <span class="mn-em">[ FR ]</span> to the French.</span>

 <h1>Writing</h1>
 <p class="lede">Paper reviews and tutorials, {{ en_posts | size }} so far &mdash; I would rather post a handful I would still defend than thirty I would not.</p>

{% include redesign/attention.html %}

{%- for group in groups -%}
{%- case group.name -%}
{%- when 'paper_review' -%}
  {%- assign g_label = 'Paper reviews' -%}{%- assign g_id = 'w-reviews' -%}
{%- when 'tutorial' -%}
  {%- assign g_label = 'Tutorials' -%}{%- assign g_id = 'w-tutorials' -%}
{%- else -%}
  {%- assign g_label = group.name | replace: '_', ' ' | replace: '-', ' ' | capitalize -%}
  {%- assign g_id = group.name | slugify | prepend: 'w-' -%}
{%- endcase -%}
{%- assign turn = forloop.index0 | modulo: 3 -%}
{%- if turn == 0 -%}{%- assign sg_a = 'sg5' -%}{%- assign sg_b = 'sg3' -%}
{%- elsif turn == 1 -%}{%- assign sg_a = 'sg3' -%}{%- assign sg_b = 'sg1' -%}
{%- else -%}{%- assign sg_a = 'sg6' -%}{%- assign sg_b = 'sg4' -%}{%- endif -%}

 <h2 id="{{ g_id }}">{{ g_label }}</h2>
 <div class="rule rule--2" aria-hidden="true"><svg><use href="#{{ sg_a }}"/></svg><svg><use href="#{{ sg_b }}"/></svg></div>

{%- assign in_group = group.items | sort: "date" -%}
{%- for post in in_group -%}
{%- assign words = post.content | strip_html | number_of_words -%}
{%- assign mins = words | divided_by: site.words_per_minute -%}
{%- if mins < 1 %}{% assign mins = 1 %}{% endif -%}

 <div class="wrow" data-spy>
  <span class="marginnote">{% if post.image.path %}<img class="mn-thumb" src="{{ post.image.path | relative_url }}" alt="{{ post.image.alt | default: post.title | escape }}" loading="lazy">{% endif %}{% if post.tags.size > 0 %}<span class="mn-label">Tags</span>{% for t in post.tags %}{{ t | replace: '_', ' ' | replace: '-', ' ' }}{% unless forloop.last %} &middot; {% endunless %}{% endfor %}{% endif %}</span>
  <span class="meta"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time></span>
  <h3 class="wtitle"><a class="tl" href="{{ post.url | relative_url }}" hreflang="en">{{ post.title }}</a></h3>
  <span class="res"><span class="gs"><a href="{{ post.url | relative_url }}" hreflang="en">EN</a></span> {% if post.translation_fr %}<span class="gs"><a href="{{ post.translation_fr | relative_url }}" hreflang="fr" lang="fr">FR</a></span>{% else %}<span class="gs">FR</span>{% endif %} <span class="dot">&middot; {{ mins }} min read</span></span>
 </div>
{% endfor -%}
{%- endfor %}

</article>

<article class="col">
 <h2 id="colophon">Colophon</h2>
 <div class="rule rule--sb rule--2" aria-hidden="true"><svg><use href="#sg0"/></svg><svg><use href="#sg2"/></svg><svg><use href="#sg5"/></svg></div>
 <div class="sb">

 <span class="marginnote"><span class="mn-label">Why these six</span>Not decoration: six lines of mathematics account for nearly everything here.</span>
 <p>Six equations, and what I use each of them for.</p>

 <div class="colo wide">

  <div class="colo-i">
  <p class="colo-m"><i>y</i> = &#8497;(<i>x</i>, {<i>W</i><sub><i>i</i></sub>}) + <i>x</i></p>
  <p class="colo-a">Residual block &middot; He et al., 2015 &middot; <a href="{{ '/blog/posts/resnet-review/' | relative_url }}">ResNet, reviewed</a></p>
  </div>

  <div class="colo-i">
  <p class="colo-m"><span class="op">Attention</span>(<i>Q</i>, <i>K</i>, <i>V</i>) = <span class="op">softmax</span>(<i>QK</i><sup>&#8868;</sup> / &#8730;<i>d</i><sub><i>k</i></sub>) <i>V</i></p>
  <p class="colo-a">Scaled dot-product attention &middot; Vaswani et al., 2017 &middot; <a href="{{ '/portfolio/florence-2-vlm/' | relative_url }}">Florence-2 and the VLMs</a></p>
  </div>

  <div class="colo-i">
  <p class="colo-m"><i>p</i>(<i>y</i> | <i>x</i>) = &#8721;<sub><i>&#960;</i> &#8712; &#8492;<sup>&#8722;1</sup>(<i>y</i>)</sub> <i>p</i>(<i>&#960;</i> | <i>x</i>)</p>
  <p class="colo-a">Connectionist temporal classification &middot; Graves et al., 2006 &middot; <a href="{{ '/portfolio/moore-speech-corpora/' | relative_url }}">Moor&eacute; ASR and the toolkit</a></p>
  </div>

  <div class="colo-i">
  <p class="colo-m">&#8466; = &#8722; &#8721;<sub><i>i</i></sub> <i>y</i><sub><i>i</i></sub> <span class="op">log</span> <i>&#375;</i><sub><i>i</i></sub></p>
  <p class="colo-a">Cross-entropy loss &middot; after Shannon, 1948 &middot; <a href="{{ '/portfolio/radio-signals-classification/' | relative_url }}">Radio-signal classification</a></p>
  </div>

  <div class="colo-i">
  <p class="colo-m"><i>&#952;</i> &#8592; <i>&#952;</i> &#8722; <i>&#951;</i> &#8711;<sub><i>&#952;</i></sub>&#8466;(<i>&#952;</i>)</p>
  <p class="colo-a">Gradient descent &middot; Cauchy, 1847 &middot; <a href="{{ '/portfolio/gan-mnist/' | relative_url }}">DCGAN on MNIST</a></p>
  </div>

  <div class="colo-i">
  <p class="colo-m"><i>y</i> = <i>&#966;</i>(&#8721;<sub><i>i</i></sub> <i>w</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub> + <i>b</i>)</p>
  <p class="colo-a">The single unit &middot; Rosenblatt, 1958 &middot; <a href="{{ '/projects/#perceptron' | relative_url }}">drawn on the work page</a></p>
  </div>

 </div>

 <p class="tail"><a href="{{ '/' | relative_url }}">Back to the home page &rarr;</a></p>
 </div>

</article>
