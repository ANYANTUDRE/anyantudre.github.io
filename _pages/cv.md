---
layout: redesign-default
view: cv
title: "Curriculum vitae"
permalink: /cv/
redirect_from:
  - /resume
# The download beside the title. /files/cv.pdf is the path the site already
# uses for the PDF (see _pages/cv-json.md); drop the file there and the link
# is live. Change this one line to move it.
cv_pdf: /files/cv.pdf
---
<!-- THE CV — § 17 of the approved design, ported. A notebook: a right-set
     mono prompt, one hairline gutter, no cell backgrounds. The right margin
     still belongs to the notes. Awards, certifications, teaching and talks are
     driven from the collections; identity, experience, education, skills,
     leadership and languages are his own CV copy, restyled, not rewritten. -->
<header class="cvhead band">
 <div class="cvtop">
 <h1>{{ page.title }}</h1>
 <a class="pdf" href="{{ page.cv_pdf | relative_url }}" download><svg class="dl" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v11.4"/><path d="M7 9.9l5 5 5-5"/><path d="M3.6 15.4V19a2 2 0 0 0 2 2h12.8a2 2 0 0 0 2-2v-3.6"/></svg>PDF version</a>
 </div>
 <p class="lede">A notebook: each <span class="call">In</span> row is a question, each <span class="call">Out</span> row its answer.</p>
 <div class="rule rule--flat" aria-hidden="true"><svg><use href="#sg5"/></svg></div>
</header>

<div class="cell">
 <div class="pr pr-in">In [1]:</div>
 <div class="cellbody cell-in"><h2 id="cv-identity">Identity</h2><span class="call">alban.identity</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg3"/></svg></div>
 <div class="pr">Out[1]:</div>
 <div class="cellbody col">
 <div class="marginnote profile">
 <img class="pt" src="{{ '/images/profile.jpg' | relative_url }}" alt="{{ site.author.name }}" width="200" height="250">
 <span class="pnames">
 <span class="pname">{{ site.author.name }}</span>
 <span class="prole">{{ site.author.bio }}</span>
 <span class="pplace">{{ site.author.location }}{% if site.author.pronouns %} <span class="sep">&middot;</span> {{ site.author.pronouns }}{% endif %}</span>
 </span>
 <ul class="socials">
 {%- if site.author.email %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-mail"/></svg><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
 {%- endif %}
 {%- if site.author.github %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-gh"/></svg><a href="https://github.com/{{ site.author.github }}">{{ site.author.github }}</a></li>
 {%- endif %}
 {%- if site.author.linkedin %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-li"/></svg><a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a></li>
 {%- endif %}
 {%- if site.author.kaggle %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-kg"/></svg><a href="https://www.kaggle.com/{{ site.author.kaggle }}">Kaggle</a></li>
 {%- endif %}
 {%- if site.author.twitter %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-x"/></svg><a href="https://x.com/{{ site.author.twitter }}">X</a></li>
 {%- endif %}
 {%- if site.author.youtube %}
 <li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-yt"/></svg><a href="https://www.youtube.com/@{{ site.author.youtube }}">YouTube</a></li>
 {%- endif %}
 </ul>
 </div>
 <p class="lede">Dipl&ocirc;me d'Ing&eacute;nieur d'&Eacute;tat in Computer Science and Artificial Intelligence, ENSA Safi, July 2026. Deep learning for vision, language and speech &mdash; with a particular stubbornness about the languages that have almost no data. Looking for a PhD in deep learning, with an interest in multimodal learning.</p>
 </div>
</div>

<div class="cell">
 <div class="pr pr-in">In [2]:</div>
 <div class="cellbody cell-in"><h2 id="cv-experience">Experience</h2><span class="call">alban.experience</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg2"/></svg></div>
 <div class="pr">Out[2]:</div>
 <div class="cellbody col">
 <ul class="trail">
 <li>
 <span class="marginnote"><span class="mn-label">5-LOX</span>5-lipoxygenase, the enzyme target. Candidate inhibitors were pulled from ChEMBL, PubChem and BindingDB.</span>
 <h3>AI Research Assistant</h3>
 <span class="meta"><time datetime="2026-03">Mar</time> &mdash; <time datetime="2026-08">Aug 2026</time> <span class="sep">&middot;</span> Universit&eacute; de Moncton <span class="sep">&middot;</span> Moncton, Canada</span>
 <p>Literature review on quantum machine learning for drug discovery, covering molecular generative models and variational quantum circuits. Collected and curated a dataset of 5-lipoxygenase (5-LOX) inhibitors from chemical databases. Implemented and evaluated hybrid quantum-classical generative architectures &mdash; QGAN, QVAE &mdash; and Transformers for the <i>de novo</i> generation of 5-LOX inhibitors.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">Moor&eacute;</span>More than seven million speakers across five or more West African countries, and almost no machine-readable data.</span>
 <h3>Machine Learning Engineer (part-time)</h3>
 <span class="meta"><time datetime="2024-03">Mar 2024</time> &mdash; <time datetime="2025-08">Aug 2025</time> <span class="sep">&middot;</span> GO AI Corporation <span class="sep">&middot;</span> Remote</span>
 <p>Designed, trained and deployed translation, speech synthesis and speech recognition models &mdash; MT, ASR and TTS &mdash; for Moor&eacute;, a low-resource language. Contributed to building one of the largest Moor&eacute;-language corpora to date, for low-resource NLP applications.</p>
 </li>
 <li>
 <h3>Machine Learning Engineering Intern</h3>
 <span class="meta"><time datetime="2023-08">Aug</time> &mdash; <time datetime="2023-10">Oct 2023</time> <span class="sep">&middot;</span> Technocolabs Softwares Inc. <span class="sep">&middot;</span> Remote</span>
 <p>Developed and deployed models predicting the prepayment risk of mortgage-backed securities, for risk assessment at financial institutions.</p>
 </li>
 </ul>
 </div>
</div>

<div class="cell">
 <div class="pr pr-in">In [3]:</div>
 <div class="cellbody cell-in"><h2 id="cv-education">Education</h2><span class="call">alban.education</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg5"/></svg></div>
 <div class="pr">Out[3]:</div>
 <div class="cellbody col">
 <ul class="trail">
 <li>
 <span class="marginnote"><span class="mn-label">ENSA Safi</span>Cadi Ayyad University, Safi, Morocco. Studied on a Kingdom of Morocco Cooperation Scholarship.</span>
 <h3>Dipl&ocirc;me d'Ing&eacute;nieur d'&Eacute;tat (BAC+5) &mdash; Computer Science and Artificial Intelligence</h3>
 <span class="meta"><time datetime="2023-10">Oct 2023</time> &mdash; <time datetime="2026-07">Jul 2026</time> <span class="sep">&middot;</span> ENSA Safi, Cadi Ayyad University <span class="sep">&middot;</span> Highest Honours, 17.25/20 <span class="sep">&middot;</span> Rank 1st/19</span>
 <p>Applied mathematics, data structures and algorithms, stochastic modelling, optimisation, NLP, heuristics, deep learning, data mining, big data, computer vision, game theory, cloud computing, fuzzy systems.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">ENSA Fez</span>Sidi Mohammed Ben Abdellah University, Fez, Morocco. The two-year preparatory cycle before the engineering one.</span>
 <h3>Preparatory Class &mdash; Mathematics, Physics and Computer Science</h3>
 <span class="meta"><time datetime="2021-10">Oct 2021</time> &mdash; <time datetime="2023-07">Jul 2023</time> <span class="sep">&middot;</span> ENSA Fez <span class="sep">&middot;</span> Highest Honours, 16.25/20 <span class="sep">&middot;</span> Rank 3rd/262</span>
 <p>Calculus, probability and statistics, linear algebra, algorithms, data structures, C programming, electronics and computer architecture, physics.</p>
 </li>
 </ul>
 </div>
</div>

<div class="cell">
 <div class="pr pr-in">In [4]:</div>
 <div class="cellbody cell-in"><h2 id="cv-skills">Technical skills</h2><span class="call">alban.stack</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg4"/></svg></div>
 <div class="pr">Out[4]:</div>
 <div class="cellbody col">
 <span class="marginnote"><span class="mn-label">As text</span>A grouped list says how somebody thinks the tools relate; a logo grid only says what they installed.</span>
 <dl class="sk">
 <dt>Programming</dt><dd>Python <span class="sep">&middot;</span> R <span class="sep">&middot;</span> SQL <span class="sep">&middot;</span> Java <span class="sep">&middot;</span> C/C++</dd>
 <dt>AI &amp; data</dt><dd>PyTorch <span class="sep">&middot;</span> TensorFlow <span class="sep">&middot;</span> Hugging Face <span class="sep">&middot;</span> SQL/PostgreSQL <span class="sep">&middot;</span> MongoDB <span class="sep">&middot;</span> Redis <span class="sep">&middot;</span> Spark <span class="sep">&middot;</span> Airflow</dd>
 <dt>Cloud &amp; MLOps</dt><dd>AWS <span class="sep">&middot;</span> Azure <span class="sep">&middot;</span> Docker <span class="sep">&middot;</span> Git <span class="sep">&middot;</span> MLflow <span class="sep">&middot;</span> FastAPI <span class="sep">&middot;</span> Django</dd>
 <dt>Deep learning</dt><dd>Language modelling (RNN, Transformers/LLM, supervised fine-tuning, quantisation, LoRA) <span class="sep">&middot;</span> computer vision (CNNs, VAE, ViT, VLM) <span class="sep">&middot;</span> RL &amp; alignment (DPO, PPO, GRPO)</dd>
 <dt>Speech processing</dt><dd>Text-to-speech (mel-spectrograms, vocoders, G2P) <span class="sep">&middot;</span> ASR (CTC, Seq2Seq/Whisper, self-supervised encoders wav2vec2/XLS-R) <span class="sep">&middot;</span> pseudo-labelling &amp; distillation <span class="sep">&middot;</span> audio tooling (librosa, torchaudio, soundfile, ffmpeg)</dd>
 </dl>
 </div>
</div>

{%- assign cv_awards = site.awards | sort: 'date' | reverse -%}
<div class="cell">
 <div class="pr pr-in">In [5]:</div>
 <div class="cellbody cell-in"><h2 id="cv-awards">Awards</h2><span class="call">alban.awards</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg1"/></svg></div>
 <div class="pr">Out[5]:</div>
 <div class="cellbody col">
 <ul class="list list--d">
 {%- for award in cv_awards %}
 <li><span class="t">{% if award.link %}<a class="tl" href="{{ award.link }}">{{ award.title | escape_once }}</a>{% else %}{{ award.title | escape_once }}{% endif %}</span>{% if award.excerpt %}<span class="d">{{ award.excerpt | strip_html | strip | escape_once }}</span>{% endif %}<span class="meta">{{ award.issuer | escape_once }} <span class="sep">&middot;</span> <time datetime="{{ award.date | date: '%Y-%m' }}">{{ award.date | date: '%Y' }}</time>{% if award.award_type %} <span class="sep">&middot;</span> {{ award.award_type | escape_once }}{% endif %}</span></li>
 {%- endfor %}
 </ul>
 </div>
</div>

{%- assign cv_certs = site.certifications | sort: 'date' | reverse -%}
<div class="cell">
 <div class="pr pr-in">In [6]:</div>
 <div class="cellbody cell-in"><h2 id="cv-certs">Certifications</h2><span class="call">alban.certifications</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg3"/></svg></div>
 <div class="pr">Out[6]:</div>
 <div class="cellbody band">
 <ul class="certs">
 {%- for cert in cv_certs %}
 <li><span class="t"><a class="tl" href="{{ cert.url | relative_url }}">{{ cert.title | escape_once }}</a></span><span class="iss">{{ cert.issuer | escape_once }}</span><span class="cy"><time datetime="{{ cert.date | date: '%Y-%m' }}">{{ cert.date | date: '%Y' }}</time></span></li>
 {%- endfor %}
 </ul>
 </div>
</div>

{%- assign cv_teaching = site.teaching | sort: 'date' | reverse -%}
{%- assign cv_talks = site.talks | sort: 'date' | reverse -%}
<div class="cell">
 <div class="pr pr-in">In [7]:</div>
 <div class="cellbody cell-in"><h2 id="cv-talks">Teaching &amp; talks</h2><span class="call">alban.teaching</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg6"/></svg></div>
 <div class="pr">Out[7]:</div>
 <div class="cellbody col">
 <span class="marginnote"><span class="mn-label">In full</span>Every session with its own page: <a href="{{ '/teaching-talks/' | relative_url }}">Teaching &amp; talks</a>.</span>
 <ul class="list">
 {%- for item in cv_teaching %}
 <li><span class="t"><a class="tl" href="{{ item.url | relative_url }}">{{ item.title | escape_once }}</a></span><br><span class="meta">Instructor <span class="sep">&middot;</span> {{ item.venue | escape_once }} <span class="sep">&middot;</span> <time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b %Y' }}</time>{% if item.location %} <span class="sep">&middot;</span> {{ item.location | escape_once }}{% endif %}</span></li>
 {%- endfor %}
 {%- for item in cv_talks %}
 <li><span class="t"><a class="tl" href="{{ item.url | relative_url }}">{{ item.title | escape_once }}</a></span><br><span class="meta">{{ item.talk_type | default: "Talk" | escape_once }} <span class="sep">&middot;</span> {{ item.venue | escape_once }} <span class="sep">&middot;</span> <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%-d %b %Y' }}</time>{% if item.location %} <span class="sep">&middot;</span> {{ item.location | escape_once }}{% endif %}</span></li>
 {%- endfor %}
 </ul>
 </div>
</div>

<div class="cell">
 <div class="pr pr-in">In [8]:</div>
 <div class="cellbody cell-in"><h2 id="cv-additional">Additional information</h2><span class="call">alban.extras</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg1"/></svg></div>
 <div class="pr">Out[8]:</div>
 <div class="cellbody col">
 <span class="marginnote"><span class="mn-label">Levels</span>CEFR, where C2 is full mastery and A1 a beginner's.</span>
 <dl class="sk">
 <dt>Languages</dt><dd>French (C2) <span class="sep">&middot;</span> English (C1) <span class="sep">&middot;</span> Spanish (A1) <span class="sep">&middot;</span> Moor&eacute; (native)</dd>
 <dt>Soft skills</dt><dd>Critical thinking <span class="sep">&middot;</span> leadership &amp; teamwork <span class="sep">&middot;</span> scientific curiosity <span class="sep">&middot;</span> deep work</dd>
 <dt>Teaching</dt><dd>Python programming, 60+ students <span class="sep">&middot;</span> data science and AI bootcamps, 200+ students</dd>
 <dt>Other</dt><dd><a href="https://www.kaggle.com/{{ site.author.kaggle | default: 'waalbannyantudre' }}">Kaggle Datasets Master</a> <span class="sep">&middot;</span> <a href="https://www.linkedin.com/posts/speak-up-ensa-safi_daezbat-leadership-engagementaeztudiant-activity-7329903188252192768-BqQt">2&times; public speaking competition winner</a></dd>
 </dl>
 </div>
</div>

<div class="cell">
 <div class="pr pr-in">In [9]:</div>
 <div class="cellbody cell-in"><h2 id="cv-leadership">Leadership &amp; volunteering</h2><span class="call">alban.service</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg4"/></svg></div>
 <div class="pr">Out[9]:</div>
 <div class="cellbody col">
 <ul class="list list--d">
 <li><span class="t">Head of Debate Section, SpeakUp Club</span><span class="d">Weekly debate workshops for 150+ members, and a team led to a win at a major competition.</span><span class="meta">ENSA Safi <span class="sep">&middot;</span> <time datetime="2023-10">Oct 2023</time> &mdash; <time datetime="2025-09">Sep 2025</time></span></li>
 <li><span class="t">Academic Coordinator</span><span class="d">Helped 100+ students through enrolment and the administrative processes that follow it.</span><span class="meta">AEBM, Fez <span class="sep">&middot;</span> <time datetime="2022-09">Sep 2022</time> &mdash; <time datetime="2023-09">Sep 2023</time></span></li>
 </ul>
 <p class="tail"><a href="{{ '/extra/' | relative_url }}">Everything outside the CV &rarr;</a></p>
 </div>
</div>
