---
layout: redesign-default
view: work
lang: fr
title: "Travaux"
permalink: /fr/projects/
---

{%- comment -%}
  LES TRAVAUX, EN FRANÇAIS. Même include que /projects/ : les bandes d'années,
  la boucle sur la collection et les règles spectrographiques ne sont écrites
  qu'une fois. Le permalien reprend le slug anglais (/projects/ → /fr/projects/),
  décision d'Alban : le sélecteur de langue est alors une règle d'une ligne qui
  ne peut pas pointer vers une page absente.

  Les pages de détail des projets restent en anglais, comme prévu ; les titres
  ci-dessous portent donc hreflang="en".
{%- endcomment -%}
{% include redesign/work.html %}
