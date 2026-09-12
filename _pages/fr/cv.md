---
layout: redesign-default
view: cv
lang: fr
title: "Curriculum vitæ"
permalink: /fr/cv/
# Le PDF proposé à côté du titre. C'est le même fichier que sur /cv/ : le site
# n'en héberge qu'un. Déposer une version française sous /files/cv-fr.pdf et
# changer cette seule ligne suffira à la servir ici.
cv_pdf: /files/cv.pdf
---
{%- comment -%}
  LE CV, EN FRANÇAIS — le même carnet que /cv/, dans la langue dans laquelle il
  sera le plus souvent lu. La structure des cellules, les invites In[n] / Out[n]
  et les boucles sur les collections sont écrites une seule fois dans
  _includes/redesign/cv.html ; seule la copie change de langue.

  Les intitulés de certification restent tels que les organismes les délivrent :
  « Microsoft Certified: Azure Data Scientist Associate » est le nom du titre,
  pas sa description.
{%- endcomment -%}
{% include redesign/cv.html %}
