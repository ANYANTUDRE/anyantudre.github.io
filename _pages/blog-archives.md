---
layout: redesign-legacy
title: "Archives"
permalink: /blog/archives/
---
<!-- KEPT AND RESTYLED. Every English post, by year, one line each. The French
     translations are reached from their English counterpart's [ EN ] / [ FR ]
     switch, so they are not listed twice here — the same rule the page has
     always used. -->

{%- assign posts_en = site.posts | where_exp: "post", "post.lang != 'fr'" -%}
{%- assign postsByYear = posts_en | group_by_exp: "post", "post.date | date: '%Y'" -%}

<p class="lede">Everything written, newest first. {{ posts_en.size }} post{% if posts_en.size != 1 %}s{% endif %} in all &mdash; or browse by <a href="{{ '/blog/categories/' | relative_url }}">category</a> or <a href="{{ '/blog/tags/' | relative_url }}">tag</a>.</p>

{%- if postsByYear.size > 0 %}
<ul class="cloud">
{%- for year in postsByYear %}
 <li><a href="#y{{ year.name }}">{{ year.name }}</a> <span class="n">({{ year.items | size }})</span></li>
{%- endfor %}
</ul>
{%- endif %}

{%- for year in postsByYear %}
<h2 id="y{{ year.name }}">{{ year.name }}</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg{{ forloop.index0 | modulo: 6 | plus: 1 }}"/></svg></div>
<ul class="index">
{%- for post in year.items %}
 <li><span class="t"><a class="tl" href="{{ post.url | relative_url }}">{{ post.title }}</a></span><span class="dt"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b %Y" }}</time></span></li>
{%- endfor %}
</ul>
{%- endfor %}

{%- if posts_en.size == 0 %}
<p class="meta">Nothing published yet.</p>
{%- endif %}

<p class="tail"><a href="{{ '/blog/' | relative_url }}">Back to the blog &rarr;</a></p>
