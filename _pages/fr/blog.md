---
layout: redesign-default
view: blog
lang: fr
title: "Écrits"
description: "Revues d'articles et tutoriels sur l'apprentissage profond, la vision par ordinateur et la parole en langues peu dotées — chaque article écrit en français comme en anglais."
permalink: /fr/blog/
---
{%- comment -%}
  LES ÉCRITS, EN FRANÇAIS. La page liste les articles dont le front matter dit
  lang: fr ; chaque ligne propose son jumeau anglais par le couple [ EN ] [ FR ]
  qu'elle portait déjà. Le mécanisme translation_fr / translation_en des billets
  n'a pas changé : c'est lui qui fait autorité, et le sélecteur de langue du
  bandeau s'efface devant lui.
{%- endcomment -%}
{% include redesign/blog-index.html %}
