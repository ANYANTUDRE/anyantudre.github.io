---
layout: redesign-legacy
title: "Tags"
permalink: /blog/tags/
---

{%- assign sorted_tags = site.tags | sort -%}

<p class="lede">Every tag, and what carries it. There is also a <a href="{{ '/blog/categories/' | relative_url }}">category index</a> and a <a href="{{ '/blog/archives/' | relative_url }}">plain archive</a>.</p>

{%- assign tag_count = 0 -%}
<ul class="cloud">
{%- for tag in sorted_tags %}
{%- assign count_en = tag[1] | where_exp: "item", "item.lang != 'fr'" | size %}
{%- if count_en > 0 %}
{%- assign tag_count = tag_count | plus: 1 %}
 <li><span class="gs"><a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a></span> <span class="n">({{ count_en }})</span></li>
{%- endif %}
{%- endfor %}
</ul>

{%- for tag in sorted_tags %}
{%- assign posts_en = tag[1] | where_exp: "item", "item.lang != 'fr'" %}
{%- if posts_en.size > 0 %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg{{ forloop.index0 | modulo: 6 | plus: 1 }}"/></svg></div>
<ul class="index">
{%- for post in posts_en %}
 <li><span class="t"><a class="tl" href="{{ post.url | relative_url }}">{{ post.title }}</a></span><span class="dt"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b %Y" }}</time></span></li>
{%- endfor %}
</ul>
{%- endif %}
{%- endfor %}

{%- if tag_count == 0 %}
<p class="meta">No tags yet.</p>
{%- endif %}

<p class="tail"><a href="{{ '/blog/' | relative_url }}">Back to the blog &rarr;</a></p>
