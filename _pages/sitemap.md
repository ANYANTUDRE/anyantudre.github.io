---
layout: redesign-legacy
title: "Sitemap"
permalink: /sitemap/
---

<p class="lede">Every page and post this site builds. For the robots there is an <a href="{{ '/sitemap.xml' | relative_url }}">XML version</a> as well.</p>

<h2 id="sm-pages">Pages</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg2"/></svg></div>
<ul class="index">
{%- for p in site.pages %}
{%- if p.title and p.sitemap != false %}
 <li><span class="t"><a class="tl" href="{{ p.url | relative_url }}">{{ p.title }}</a></span></li>
{%- endif %}
{%- endfor %}
</ul>

<h2 id="sm-posts">Posts</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg4"/></svg></div>
<ul class="index">
{%- for post in site.posts %}
 <li><span class="t"><a class="tl" href="{{ post.url | relative_url }}">{{ post.title }}</a></span><span class="dt"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b %Y" }}</time></span></li>
{%- endfor %}
</ul>

{%- for collection in site.collections %}
{%- unless collection.output == false or collection.label == "posts" %}
{%- if collection.docs.size > 0 %}
<h2 id="sm-{{ collection.label | slugify }}">{{ collection.label | capitalize }}</h2>
<div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg{{ forloop.index0 | modulo: 6 | plus: 1 }}"/></svg></div>
<ul class="index">
{%- for doc in collection.docs %}
 <li><span class="t"><a class="tl" href="{{ doc.url | relative_url }}">{{ doc.title }}</a></span><span class="dt">{% if doc.date %}<time datetime="{{ doc.date | date_to_xmlschema }}">{{ doc.date | date: "%-d %b %Y" }}</time>{% endif %}</span></li>
{%- endfor %}
</ul>
{%- endif %}
{%- endunless %}
{%- endfor %}
