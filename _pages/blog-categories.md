---
layout: redesign-legacy
title: "Categories"
permalink: /blog/categories/
---

<p class="lede">The posts by the subject they belong to. There is also a <a href="{{ '/blog/tags/' | relative_url }}">tag index</a> and a <a href="{{ '/blog/archives/' | relative_url }}">plain archive</a>.</p>

{%- assign cat_count = 0 -%}
<ul class="cloud">
{%- for category in site.categories %}
{%- assign posts_in_cat = category[1] | where_exp: "item", "item.lang != 'fr'" %}
{%- if posts_in_cat.size > 0 %}
{%- assign cat_count = cat_count | plus: 1 %}
 <li><a href="#{{ category[0] | slugify }}">{{ category[0] }}</a> <span class="n">({{ posts_in_cat.size }})</span></li>
{%- endif %}
{%- endfor %}
</ul>

{%- for category in site.categories %}
{%- assign posts_in_cat = category[1] | where_exp: "item", "item.lang != 'fr'" %}
{%- if posts_in_cat.size > 0 %}
<h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg{{ forloop.index0 | modulo: 6 | plus: 1 }}"/></svg></div>
<ul class="index">
{%- for post in posts_in_cat %}
 <li><span class="t"><a class="tl" href="{{ post.url | relative_url }}">{{ post.title }}</a></span><span class="dt"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b %Y" }}</time></span></li>
{%- endfor %}
</ul>
{%- endif %}
{%- endfor %}

{%- if cat_count == 0 %}
<p class="meta">No categories yet.</p>
{%- endif %}

<p class="tail"><a href="{{ '/blog/' | relative_url }}">Back to the blog &rarr;</a></p>
