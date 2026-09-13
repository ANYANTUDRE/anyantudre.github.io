# Tutorial: running and editing this site

How to run the site locally, change its content and deploy it. For what the repository is, see [README.md](README.md).

---

## Quick Start

### Option A: Docker (no Ruby needed)

```bash
docker compose up
```

Then open http://localhost:4000. The container installs the gems on first run and rebuilds when files change.

If the Docker port forwarding is unreliable on your machine, build once and serve the output with Python instead:

```bash
docker run --rm -v "${PWD}:/usr/src/app" -v jekyll-bundle:/bundle -u 0:0 -e BUNDLE_PATH=/bundle -e JEKYLL_ENV=docker jekyll-site sh -c "bundle exec jekyll build --config _config.yml,_config_docker.yml"
```

```bash
python -m http.server 4000 --bind :: --directory _site
```

Rebuild after each change and refresh the page.

### Option B: Ruby

Prerequisites: [Ruby](https://www.ruby-lang.org/en/downloads/) (3.0+), [Bundler](https://bundler.io/) (`gem install bundler`) and [Git](https://git-scm.com/).

```bash
# Clone the repository
git clone https://github.com/anyantudre/anyantudre.github.io.git
cd anyantudre.github.io

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

---

## Project Structure

```
├── _pages/           # Main pages (about, blog, projects, etc.); French copies in _pages/fr/
├── _posts/           # Blog posts (one file per language)
├── _portfolio/       # Project entries
├── _news/            # News items shown on the home page
├── _talks/           # Talks & presentations
├── _teaching/        # Teaching experiences
├── _certifications/  # Certifications
├── _awards/          # Awards & honors
├── _data/            # Navigation, UI text (t.yml holds the English and French strings)
├── _includes/        # Reusable HTML components (redesign/ holds the current site)
├── _layouts/         # Page templates
├── _sass/            # SCSS stylesheets (redesign/ holds the current design)
├── assets/           # CSS, JS, fonts
├── images/           # All images
├── files/            # PDFs and downloadable files
└── _config.yml       # Site configuration
```

---

## How to Modify Content

### Update Personal Info

Edit `_config.yml`:
```yaml
title: "Your Name"
name: "Your Name"
description: "Your tagline"
url: "https://yourusername.github.io"
```

The home page text (About me, Education, Experience) is in `_includes/redesign/home.html`, and the CV page in `_includes/redesign/cv.html`. Both have an English and a French branch. Short interface strings (headings, labels, captions) are in `_data/t.yml`, English block first, French block second.

### Add a Blog Post

Posts are written once per language. Create a new file in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
title: "My New Post"
date: 2025-01-31
categories: [paper_review]   # paper_review or tutorial
tags: [deep_learning, cnn]
description: "Brief description of the post."
image:
  path: /images/blog/my-image.png
  alt: "Image description"
math: true                   # only if the post uses $...$
lang: en
translation_fr: /blog/posts/my-new-post-fr/
---

Your content here...
```

The French version is a second file with `lang: fr` and a link back to the English one.

### Add a Project

Create a new file in `_portfolio/`:

```markdown
---
title: "Project Name"
excerpt: "Short description.<br/><br/>**Technologies:** Python, PyTorch"
collection: portfolio
date: 2025-01-01
image: "portfolio/project-image.png"
github_url: "https://github.com/username/repo"
github_stars: 10
tags: [Machine Learning, Python]
---

Full project description...
```

### Add a News Item

Create a new file in `_news/`. The home page shows the newest three at a time.

```markdown
---
title: "Started a new position"
title_fr: "Début d'un nouveau poste"
collection: news
date: 2026-03-01
organisation: "Organisation Name"
excerpt: "One line about it."
excerpt_fr: "Une ligne à ce sujet."
onward: /awards/some-award/      # optional link to a related page
onward_label: "The award"
---

Full description...
```

### Add an Award

Create a new file in `_awards/`:

```markdown
---
title: "Award Name"
collection: awards
date: 2025-01-01
award_type: "Competition"
category: "competition"  # academic, competition, or scholarship
issuer: "Organization Name"
image: "awards/award-image.png"
link: "https://link-to-award"
excerpt: "Brief description."
---

Full description...
```

### Add a Talk

Create a new file in `_talks/`:

```markdown
---
title: "Talk Title"
collection: talks
talk_type: "Conference Talk"
venue: "Event Name"
date: 2025-01-01
location: "City, Country"
excerpt: "Brief description."
image: "talks/talk-image.png"
pdf: "/files/talks/presentation.pdf"
---

Talk description...
```

### Add a Certification

Create a new file in `_certifications/`:

```markdown
---
title: "Certification Name"
collection: certifications
type: "Professional Certification"
issuer: "Organization"
date: 2025-01-01
credential_id: "ABC123"
image: "certifications/cert-image.png"
excerpt: "Brief description."
---

Full description...
```

### Update Navigation

Edit `_data/navigation.yml`:

```yaml
main:
  - title: "Blog"
    url: /blog/
  - title: "Projects"
    url: /projects/
  # Add more items...
```

---

## Setup Guides

### GitHub Pages Deployment

1. Push your code to a repository named `yourusername.github.io`
2. Go to **Settings > Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**
6. Wait a few minutes, your site will be live at `https://yourusername.github.io`

On GitHub Free the repository has to be public for Pages to publish it. Private repositories can publish with GitHub Pro, Team or Enterprise, and the site itself is still public.

### Giscus Comments Setup

1. Enable **Discussions** in your GitHub repository settings
2. Install [Giscus App](https://github.com/apps/giscus) on your repository
3. Go to [giscus.app](https://giscus.app/) and configure:
   - Repository: `yourusername/yourusername.github.io`
   - Category: `Announcements` (or create a new one)
4. Copy the generated values and update `_config.yml`:

```yaml
comments:
  provider: "giscus"
  giscus:
    repo: "yourusername/yourusername.github.io"
    repo_id: "YOUR_REPO_ID"
    category: "Announcements"
    category_id: "YOUR_CATEGORY_ID"
    mapping: "pathname"
    reactions_enabled: "1"
    emit_metadata: "0"
    theme: "light"
```

5. Update `_includes/giscus.html` with the same values

### Visitor Map (MapMyVisitors)

1. Go to [mapmyvisitors.com](https://mapmyvisitors.com/)
2. Create a map widget for your website URL
3. Copy the JavaScript snippet
4. Replace the script in `_includes/redesign/home.html`, in the "Where readers come from" block:

```html
<div class="visitors-map">
  <script type="text/javascript" id="mapmyvisitors" src="YOUR_SCRIPT_URL"></script>
</div>
```

### Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Create a `CNAME` file in root with your domain:
   ```
   www.yourdomain.com
   ```
3. Configure DNS at your domain provider:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Or A records pointing to GitHub's IPs
4. In GitHub Pages settings, add your custom domain

---

## Adding Images

Place images in the appropriate folder:

- `images/blog/` - Blog post images
- `images/portfolio/` - Project images
- `images/talks/` - Talk thumbnails
- `images/certifications/` - Certificate screenshots
- `images/awards/` - Award images
- `files/talks/` - PDF presentations

---

## Customization

### Colors, Fonts & Layout

Edit the design tokens in `_sass/redesign/_tokens.scss` (colours, type scale, column widths). The comments next to each value explain what it controls.

### Favicon

Replace the `images/favicon.*` files (SVG, ICO and PNG sizes). They are linked from `_includes/head/custom.html`.

---

## Troubleshooting

### Common Issues

**Jekyll serve error on Windows:**
```bash
# Add to Gemfile if not present:
gem 'wdm', '>= 0.1.0'
gem 'tzinfo'
gem 'tzinfo-data'
```

**Pagination warning:**
This is normal if pagination is disabled. Ignore or enable `jekyll-paginate-v2`.

**YAML syntax error:**
Check for special characters in YAML files. Escape `&` as `&amp;` in HTML, or use quotes in YAML.

---

## License

See [LICENSE](LICENSE). The site is based on [Academic Pages](https://github.com/academicpages/academicpages.github.io); the code from that template stays under the MIT License ([LICENSE-MIT](LICENSE-MIT)).

---

## Contact

- **Email:** nyantudrealban@gmail.com
- **LinkedIn:** [anyantudre](https://linkedin.com/in/anyantudre)
- **GitHub:** [anyantudre](https://github.com/anyantudre)
