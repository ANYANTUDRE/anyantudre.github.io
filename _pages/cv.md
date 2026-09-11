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
 <p class="lede">MEng student in Data Engineering and Artificial Intelligence at ENSA Safi, and Chief Technology Officer and Machine Learning Engineer at GO AI Corporation. Deep learning for vision, language and speech &mdash; with a particular stubbornness about the languages that have almost no data.</p>
 <p class="meta">Languages of work: French (native) <span class="sep">&middot;</span> English (C1) <span class="sep">&middot;</span> Spanish (A1)</p>
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
 <span class="marginnote"><span class="mn-label">GO AI Corporation</span>Data and AI systems for social good. Ouagadougou and remote.</span>
 <h3>Chief Technology Officer</h3>
 <span class="meta"><time datetime="2024-10">Oct 2024</time> &mdash; present <span class="sep">&middot;</span> GO AI Corporation</span>
 <p>Lead the team responsible for the design, development and deployment of the company's AI solutions. Supervise and mentor interns, and have trained 120+ people in data science through the bootcamps.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">Moor&eacute;</span>A language with more than seven million speakers and almost no machine-readable data.</span>
 <h3>Machine Learning Engineer</h3>
 <span class="meta"><time datetime="2024-03">Mar 2024</time> &mdash; present <span class="sep">&middot;</span> GO AI Corporation</span>
 <p>AI-for-social-good projects on local languages, education and access to information. Led the design and training of translation and speech models for Moor&eacute;, since adopted by UNICEF, the Tanager NGO and Orange Burkina.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">Moncton</span>New Brunswick, Canada. The collaboration that carried the Mitacs Globalink Research Award.</span>
 <h3>ML Research Intern</h3>
 <span class="meta"><time datetime="2025-02">Feb</time> &mdash; <time datetime="2025-05">May 2025</time> <span class="sep">&middot;</span> Universit&eacute; de Moncton</span>
 <p>Research on securing AI models against extraction and poisoning attacks: a literature review of model stealing and data poisoning against CNN and Transformer architectures.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">Technocolabs Softwares</span>Remote. Loan-level securitisation data, under an imbalanced target.</span>
 <h3>ML Engineer Intern</h3>
 <span class="meta"><time datetime="2023-08">Aug</time> &mdash; <time datetime="2023-10">Oct 2023</time> <span class="sep">&middot;</span> Technocolabs Softwares Inc.</span>
 <p>Developed and deployed models predicting the prepayment risk of mortgage-backed securities.</p>
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
 <span class="marginnote"><span class="mn-label">ENSA Safi</span>Cadi Ayyad University, Morocco. Studied on a Kingdom of Morocco Cooperation Scholarship.</span>
 <h3>MEng, Computer Science &mdash; Data Engineering &amp; AI</h3>
 <span class="meta"><time>2023</time> &mdash; present <span class="sep">&middot;</span> ENSA Safi, Cadi Ayyad University <span class="sep">&middot;</span> Rank 1st/19 <span class="sep">&middot;</span> GPA 17.2/20</span>
 <p>Deep learning, data mining, NLP, computer vision, big data, cloud computing, and optimisation and heuristics.</p>
 </li>
 <li>
 <span class="marginnote"><span class="mn-label">ENSA Fez</span>Sidi Mohamed Ben Abdellah University. The two-year preparatory cycle before the engineering one.</span>
 <h3>Preparatory Cycle &mdash; Mathematics, Physics &amp; Computer Science</h3>
 <span class="meta"><time>2021</time> &mdash; <time>2023</time> <span class="sep">&middot;</span> ENSA Fez <span class="sep">&middot;</span> Rank 3rd/262 <span class="sep">&middot;</span> GPA 16.25/20</span>
 <p>Calculus, probability and statistics, linear algebra, data structures and C programming.</p>
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
 <dt>AI &amp; ML</dt><dd>PyTorch <span class="sep">&middot;</span> TensorFlow <span class="sep">&middot;</span> Transformers <span class="sep">&middot;</span> Hugging Face <span class="sep">&middot;</span> LangChain/LangGraph <span class="sep">&middot;</span> OpenCV</dd>
 <dt>Databases &amp; big data</dt><dd>MongoDB <span class="sep">&middot;</span> Redis <span class="sep">&middot;</span> Spark <span class="sep">&middot;</span> Kafka <span class="sep">&middot;</span> Airflow <span class="sep">&middot;</span> Neo4j</dd>
 <dt>Cloud &amp; MLOps</dt><dd>AWS <span class="sep">&middot;</span> Azure <span class="sep">&middot;</span> Docker <span class="sep">&middot;</span> Git <span class="sep">&middot;</span> MLflow <span class="sep">&middot;</span> FastAPI <span class="sep">&middot;</span> Django</dd>
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
 <div class="cellbody cell-in"><h2 id="cv-leadership">Leadership &amp; volunteering</h2><span class="call">alban.service</span></div>
 <div class="rule rule--cv" aria-hidden="true"><svg><use href="#sg4"/></svg></div>
 <div class="pr">Out[8]:</div>
 <div class="cellbody col">
 <ul class="list list--d">
 <li><span class="t">Head of Debate Section, SpeakUp Club</span><span class="d">Weekly debate workshops for 150+ members, and a team led to a win at a major competition.</span><span class="meta">ENSA Safi <span class="sep">&middot;</span> <time datetime="2023-10">Oct 2023</time> &mdash; <time datetime="2025-09">Sep 2025</time></span></li>
 <li><span class="t">Academic Coordinator</span><span class="d">Helped 100+ students through enrolment and the administrative processes that follow it.</span><span class="meta">AEBM, Fez <span class="sep">&middot;</span> <time datetime="2022-09">Sep 2022</time> &mdash; <time datetime="2023-09">Sep 2023</time></span></li>
 </ul>
 <p class="tail"><a href="{{ '/extra/' | relative_url }}">Everything outside the CV &rarr;</a></p>
 </div>
</div>
