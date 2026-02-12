# RoadWayz Driving School Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Froadwayz.co.uk)](https://roadwayz.co.uk)
![Built With](https://img.shields.io/badge/Built%20With-HTML5%20%7C%20Tailwind%20CSS%20%7C%20Alpine.js-blue)

Modern, responsive, SEO-focused brochure website for **RoadWayz Driving School** (Kirkcaldy, Fife).

**Live URL:** https://roadwayz.co.uk

---

## Table of contents

- [Project overview](#project-overview)
- [Key features](#key-features)
- [Technology stack](#technology-stack)
- [File structure](#file-structure)
- [Run locally](#run-locally)
- [Configuration & customization](#configuration--customization)
  - [Contact form](#contact-form)
  - [Pricing & content](#pricing--content)
  - [SEO & schema](#seo--schema)
- [Deployment](#deployment)
- [License](#license)

---

## Project overview

Static site built to establish an online presence for a local driving instructor. Focuses on performance, accessibility, and local SEO to capture traffic in the Fife area.

## Key features

- **Fully responsive:** Mobile-first layout using Tailwind CSS.
- **Glassmorphism UI:** Modern, clean aesthetic with custom overlays.
- **Interaction:** Mobile menu and state management with [Alpine.js](https://alpinejs.dev/).
- **Animations:** Scroll animations powered by [AOS](https://michalsnik.github.io/aos/).
- **Contact form:** Serverless email handling via [Formspree](https://formspree.io/).
- **SEO optimized:** JSON-LD Local Business schema, Open Graph tags, and semantic HTML5.
- **GDPR compliant:** Privacy Policy, Terms & Conditions, and a cookie consent banner.

## Technology stack

This project uses a **no-build** approach for simplicity and easy maintenance (CDNs instead of a Node.js build pipeline).

- **HTML5** — semantic markup
- **Tailwind CSS (CDN)** — styling framework (configured in `script.js`)
- **Alpine.js (CDN)** — lightweight JS for UI behavior
- **AOS (CDN)** — Animate On Scroll library
- **Google Fonts** — Poppins typeface
- **Font Awesome** — iconography

## File structure

```text
├── index.html          # Main landing page
├── privacy.html        # Privacy Policy (GDPR)
├── terms.html          # Terms & Conditions
├── 404.html            # Custom error page
├── style.css           # Custom CSS overrides (scrollbars, glassmorphism)
├── script.js           # Tailwind config & AOS initialization
├── site.webmanifest    # PWA manifest for Android/Chrome
├── CNAME               # Custom domain config for GitHub Pages
└── README.md           # Project documentation
```

## Run locally

Since this is a static site, you do not need `npm` or a build process.

1. **Clone the repository**
   ```bash
   git clone https://github.com/lewiswake/roadwayz.git
   ```

2. **Open the folder**  
   Navigate to the folder on your computer.

3. **Run the site**
   - Double-click `index.html` to open it in your browser, **or**
   - Use the **Live Server** extension in VS Code for hot reloading.

## Configuration & customization

### Contact form

The contact form uses [Formspree](https://formspree.io/). To update the destination email:

1. Open `index.html`.
2. Find the `<form>` tag inside the `#contact` section.
3. Update the `action` URL with your new Formspree endpoint:

```html
<form action="https://formspree.io/f/YOUR_NEW_ID" method="POST">
```

### Pricing & content

All content is hard-coded in HTML for speed.

- **Prices:** Search for `id="rates"` in `index.html`.
- **Phone number:** Search for `tel:07748128184` to update call links.

### SEO & schema

A JSON-LD script tag exists in the `<head>`. If the business address or operating hours change, update the JSON object inside:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness"
}
</script>
```

## Deployment

Hosted on **GitHub Pages**:

- Push changes to the `main` branch.
- GitHub Actions will automatically deploy the HTML files.
- The `CNAME` file ensures the site resolves to `roadwayz.co.uk` instead of the default GitHub Pages domain.

## License

All rights reserved to **RoadWayz Driving School**. Website created by **Lewis Wake**.
