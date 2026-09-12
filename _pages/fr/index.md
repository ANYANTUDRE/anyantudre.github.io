---
permalink: /fr/
title: "À propos"
layout: redesign-default
view: home
lang: fr
author_profile: false
---

{%- comment -%}
  LA PAGE D'ACCUEIL FRANÇAISE.  ROUND 6, § 1.

  Le corps est exactement celui de la page anglaise — _includes/redesign/home.html —
  parce qu'il ne s'agit pas d'un autre site mais de la même page dans une autre
  langue : mêmes sections, mêmes identifiants d'ancre, mêmes collections. Seule
  `lang: fr` change, et tout en découle : les chaînes d'interface viennent de
  _data/t.yml, les titres et résumés des collections de leurs clés title_fr /
  excerpt_fr, les dates du mois nommé en français, et la prose de la branche
  française de l'include.

  Le permalien est le miroir exact de l'anglais (/ → /fr/), ce dont dépend le
  sélecteur de langue du bandeau : il dérive l'adresse de la page jumelle au
  lieu de la lire quelque part, et ne peut donc pas dériver.
{%- endcomment -%}
{% include redesign/home.html %}
