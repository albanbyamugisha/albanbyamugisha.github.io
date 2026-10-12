# Architecture and implementation specification

## Framework decision

Use Astro with TypeScript in static-output mode. Astro supports GitHub Pages deployment, structured content collections, and selective interactive components. Next.js static exports are possible, but server-only features do not run on Pages. A Vite React application is also deployable, but Astro is a better fit here for content pages with selected interactive areas. This is a fit-based decision, not a claim of a universally best framework.

Sources: [Astro Pages deployment](https://docs.astro.build/en/guides/deploy/github/), [content collections](https://docs.astro.build/en/guides/content-collections/), [islands](https://docs.astro.build/en/concepts/islands/), [Next.js static export](https://nextjs.org/docs/pages/guides/static-exports), [Vite deployment](https://vite.dev/guide/static-deploy.html).

Use a supported Node runtime, npm lockfile, and stable compatible dependency versions selected at setup. Record exact versions after installation; no package version is fixed by this planning document. Use Three.js only for the bounded 3D hero if the prototype meets performance needs. Prefer native CSS, SVG, IntersectionObserver, and requestAnimationFrame for simpler effects; add an animation library only if justified by tested behavior.

## Proposed source structure

```text
.pages.yml                       # Pages CMS configuration
.github/workflows/deploy.yml      # checks, build, Pages deployment
src/pages/                       # home/about/projects/skills/insights/contact/404
src/layouts/                     # shared document and article layout
src/components/                  # header/footer/cards/forms/theme/motion/hero
src/styles/                      # tokens, globals, component styles
src/data/profile.json            # identity, intro, education, skills, social links
src/content/projects/            # Markdown project records
src/content/insights/            # Markdown article records
src/content/credentials/         # structured individual credential records
src/content.config.ts            # validated Astro collections
public/images/                   # portraits, favicon and preview images
public/certificates/             # public certificate originals
public/documents/                # downloadable CV
docs/                            # requirements and operating guides
```

Finalize compatible file formats and CMS paths before schema implementation. Public certificate records must contain URL paths, not local source paths from the provenance register.

## Content fields and validation

| Record | Fields |
| --- | --- |
| Profile | name, introduction, location, contacts, social URLs, education, skill labels, languages, cvPath |
| Project | title, slug, summary, technologies, type, repositoryUrl (optional), featured, displayOrder, draft, body |
| Insight | title, slug, author, publicationDate, excerpt, originalUrl, draft, body |
| Credential | title, issuer, kind, date (optional), datePrecision, credentialId (optional), verificationUrl (optional), certificatePath (optional), previewPath (optional), displayOrder |

Validate URLs and dates, required fields, unique slugs, order values, referenced local assets, and allowed record types. A credential must provide a usable external link or local certificate by launch; a preview can use a graceful placeholder until its image exists. Unknown dates remain null, not January 1 defaults. Separate draft content from published collections.

## Rendering and failure behavior

Generate content pages at build time; hydrate only interactive UI. Keep core copy/links in HTML. Theme initialization minimizes flashing while preserving system and manual preferences. Canvas loads after essential content, handles resize/context loss, and releases listeners and render loops when appropriate. Certificate previews lazy-load with fixed dimensions; do not load 25 embedded PDF viewers at once. External links have clear labels; new tabs use appropriate rel values.

## Contact form

An external form provider is required. Provider selection and account activation remain pending. Required fields: name, email, message; subject optional. Include labels, limits, spam controls supported by the provider, pending/disabled state, success/failure feedback, and direct-email fallback. Never report success before the provider confirms acceptance. Actual email delivery must be verified separately. Do not put private provider keys in client code or commit secrets.

## Search and sharing

Provide unique page titles/descriptions, canonical URLs, social preview assets, a sitemap, robots.txt, and a useful 404 page. Structured data must reflect evidenced identity, not invented qualifications. Long-form Insights pages remain visually quiet for reading. Search metadata is an implementation requirement, not a guarantee of ranking.
