---
layout: redesign-default
view: cv
lang: en
title: "Curriculum vitae"
permalink: /cv/
redirect_from:
  - /resume
# The download beside the title. /files/cv.pdf is the path the site already
# uses for the PDF (see _pages/cv-json.md); drop the file there and the link
# is live. Change this one line to move it.
cv_pdf: /files/cv.pdf
---
{%- comment -%}
  ROUND 6, § 1 — the notebook itself lives in _includes/redesign/cv.html and is
  shared with /fr/cv/, which sets lang: fr and its own French PDF path.
{%- endcomment -%}
{% include redesign/cv.html %}
