# Muhammad Hadeed — Portfolio

A fast, responsive personal portfolio showcasing my work across **AI/ML, backend engineering, APIs, and full-stack development**.

Built with semantic HTML, modern CSS, and vanilla JavaScript, the portfolio is intentionally lightweight and requires **no frontend framework or build system**.

> **Live Portfolio:** Coming soon
> **GitHub:** [github.com/CodeCatalystHadeed](https://github.com/CodeCatalystHadeed)

---

## About

I'm a software developer with interests in **Artificial Intelligence, Machine Learning, backend systems, APIs, and full-stack development**.

This portfolio presents selected projects, technical skills, experience, education, and academic achievements through a responsive and accessible interface.

Academic distinctions highlighted in the portfolio include:

* **Gold Medalist**
* **Dean's & Vice Chancellor's Honor Lists — 8 consecutive semesters**

---

## Featured Projects

### JobEZ — AI-Enabled Recruitment Platform

An AI-enabled recruitment platform designed to improve candidate screening and job discovery through resume processing, semantic matching, personalized recommendations, and preliminary interview workflows.

**Technologies**

`Python` `FastAPI` `PostgreSQL` `OpenAI API` `ChromaDB` `Semantic Search` `Embeddings` `NLP` `Cosine Similarity` `REST APIs` `Speech-to-Text` `Text-to-Speech`

---

### Sentiment Analysis API

An NLP-based machine-learning service that classifies textual feedback as positive, negative, or neutral and exposes predictions through a FastAPI REST API.

**Technologies**

`Python` `FastAPI` `scikit-learn` `NLP` `Machine Learning` `REST API`

---

### Titanic Survival Prediction

An end-to-end supervised machine-learning project covering exploratory data analysis, preprocessing, feature engineering, model training, evaluation, and visualization.

**Technologies**

`Python` `Pandas` `NumPy` `scikit-learn` `Machine Learning` `Jupyter`

---

### EventSphere

A full-stack event ticketing platform covering event discovery, ticket selection, authentication, cart management, checkout, and payment workflows.

**Technologies**

`React` `Node.js` `Express.js` `MongoDB` `JavaScript` `REST APIs`

---

### Virtual Debate

A real-time MERN-stack debating platform supporting live discussions, voting, participant interaction, and WebSocket-based updates.

**Technologies**

`React` `Node.js` `Express.js` `MongoDB` `WebSockets` `JavaScript`

---

## Portfolio Features

* Responsive desktop, tablet, and mobile design
* Dark and light themes
* Accessible keyboard navigation
* Responsive mobile navigation
* Project filtering
* Scrollable project case-study modals
* Detailed project problem, solution, contribution, and technology sections
* Experience and education timeline
* Academic achievement highlights
* Resume download/view functionality
* GitHub, LinkedIn, email, phone, and location links
* Scroll progress indicator
* Back-to-top control
* Reduced-motion support
* Responsive WebP images with JPEG fallback
* Inline SVG icon system
* No external icon library
* No frontend framework runtime
* No required npm dependencies

---

## Technology Stack

### Frontend

* Semantic HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS variables
* Responsive design
* Vanilla JavaScript

### Browser APIs

* Dialog API
* IntersectionObserver
* Clipboard API
* localStorage

### Performance

* Responsive WebP images
* JPEG fallback
* Inline SVG icons
* System font stack
* No external frontend dependencies
* No framework runtime

### Deployment

* Git
* GitHub
* Vercel

---

## Project Structure

```text
muhammad-hadeed-portfolio/
│
├── assets/
│   ├── app.js
│   ├── data.js
│   ├── styles.css
│   ├── profile-480.webp
│   ├── profile-800.webp
│   ├── profile.jpg
│   ├── favicon.svg
│   └── og-cover.png
│
├── index.html
├── Muhammad-Hadeed-Resume.pdf
├── README.md
├── package.json
├── vercel.json
├── run-local.bat
└── run-local.sh
```

### Important Files

| File                         | Purpose                                                                |
| ---------------------------- | ---------------------------------------------------------------------- |
| `index.html`                 | Main portfolio page and static content                                 |
| `assets/data.js`             | Projects, technology groups, experience, and timeline data             |
| `assets/app.js`              | Navigation, theme, project filtering, dialogs, icons, and interactions |
| `assets/styles.css`          | Layout, visual design, responsive behavior, and animations             |
| `Muhammad-Hadeed-Resume.pdf` | Resume used by portfolio Resume buttons                                |
| `vercel.json`                | Vercel deployment configuration                                        |

---

## Running Locally

The portfolio has no required build step.

### Python

From the project directory:

```bash
python -m http.server 8000
```

On some Windows installations:

```bash
py -m http.server 8000
```

On macOS/Linux:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Windows Helper

You can also run:

```text
run-local.bat
```

### macOS / Linux Helper

```bash
./run-local.sh
```

### VS Code

If you use the **Live Server** extension, open `index.html` with Live Server.

---

## Updating Portfolio Content

Most reusable portfolio content is stored in:

```text
assets/data.js
```

Use it to update:

* Projects
* Project technology stacks
* Project descriptions
* Problems and solutions
* Key contributions
* Skill groups
* Experience
* Education timeline entries

For main page wording such as the hero, About section, navigation, and contact details, edit:

```text
index.html
```

For design changes, responsive behavior, colors, spacing, and modal styling, edit:

```text
assets/styles.css
```

For interactions and modal behavior, edit:

```text
assets/app.js
```

---

## Adding a Project

Projects in `assets/data.js` follow this structure:

```js
{
  title: "Project Name",
  category: "AI / ML",
  icon: "brain-circuit",
  accent: "blue",

  stack: [
    "Python",
    "FastAPI"
  ],

  summary:
    "Short overview shown on the project card and modal.",

  problem:
    "The real-world or technical problem addressed by the project.",

  solution:
    "How the project approaches or solves the problem.",

  highlights: [
    "Key contribution or feature",
    "Another contribution or feature"
  ],

  github:
    "https://github.com/your-username/your-repository"
}
```

Each project modal is generated automatically from this data.

---

## Updating the Resume

Replace:

```text
Muhammad-Hadeed-Resume.pdf
```

with the latest resume while keeping the same filename.

Existing Resume buttons will continue to work without requiring code changes.

---

## Deployment

This portfolio is designed for static deployment on **Vercel**.

Recommended workflow:

```text
Local Development
        ↓
Git Commit
        ↓
GitHub
        ↓
Vercel
        ↓
Production
```

Once the GitHub repository is connected to Vercel, future pushes to the production branch can automatically trigger new deployments.

No custom frontend build process is required.

---

## Pre-Deployment Checklist

Before publishing an update, verify:

* No horizontal scrolling
* Navigation works on desktop and mobile
* Dark/light theme works
* Project filters work
* All project modals open correctly
* Modal close button works with one click
* Escape closes the modal
* Modal content scrolls correctly
* Resume link works
* GitHub and LinkedIn links work
* Email and phone links work
* Profile image loads correctly
* Mobile layout works at small viewport widths
* No API keys, passwords, `.env` files, or private credentials are committed

Recommended viewport checks:

```text
1440px  Desktop
1280px  Laptop
820px   Tablet
390px   Mobile
320px   Small mobile
```

---

## Performance & Accessibility

The portfolio is designed to remain lightweight and accessible.

Key considerations include:

* Semantic page structure
* Visible keyboard focus states
* Keyboard-accessible navigation
* Escape-key modal support
* Reduced-motion support
* Optimized responsive images
* Native browser APIs instead of unnecessary dependencies
* Inline SVG icons instead of an external icon package
* System fonts instead of externally downloaded font files

---

## Contact

**Muhammad Hadeed**

* GitHub: [CodeCatalystHadeed](https://github.com/CodeCatalystHadeed)
* LinkedIn: Available through the portfolio
* Email: Available through the portfolio
* Resume: Available directly from the portfolio

---

## License

This repository contains my personal portfolio source code and content.

The code may be referenced for learning purposes, but personal information, project descriptions, branding, resume content, images, and portfolio copy should not be reused as another person's portfolio.
