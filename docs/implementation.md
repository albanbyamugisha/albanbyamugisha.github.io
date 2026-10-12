# Production implementation — 13 October 2026

## Scope

Implemented recommendations 1 and 3–7. Project descriptions, claims and repository destinations remain as approved in the prototype. The app now uses Astro 5, TypeScript validation, local JSON data, and Markdown Insights. It outputs static pages for GitHub Pages.

## Content files

`src/data/profile.json` controls your name, focus, introduction, About wording, location, contact email, CV path, education, skill labels, and social links. `src/data/projects.json` contains the existing five project descriptions. `src/data/credentials.json` contains all 25 credentials together. Each credential has a unique id, title, issuer, kind, optional date, verificationUrl and optional document path. Unknown dates stay empty. `src/content/insights/*.md` contains article frontmatter and body. `draft: true` excludes an article from production routes.

`src/lib/data.ts` validates JSON at build time. Invalid contact email, external link scheme, credential IDs, dates or asset paths stop the build. Astro validates article frontmatter. Production never reads the internal source paths from `docs/credential-register.json`.

## Visuals and interactions

The hero now shows your full name and professional focus as static text. Typewriter text is decorative; stable text remains available to assistive technology. The original eight-second hero video loads only when the hero is visible and effects are enabled. Device reduced-motion, data-saving, slow 2G, hidden tabs, autoplay restrictions and media failures have poster fallbacks. Portraits and Insights artwork are optimized to WebP by Astro. Fonts are hosted locally with OFL license files.

The Effects control supports device preference, full effects or reduced effects and persists the selection locally. Reduced effects disable typing, particles, video and nonessential CSS animation, while preserving content. Theme choice also persists. Credential search matches title and issuer, preserving original ordering; eight entries are initially visible, Show all reveals the full list, and search reveals all matching entries. Without JavaScript all credentials remain visible. Loading indicators track image/video fetch or contact submission. Instant navigation, external links and theme controls do not fabricate loading.

## Contact service

FormSubmit is configured for `albanbyamugisha@gmail.com`. JavaScript submits to its AJAX endpoint, with a 20-second timeout, duplicate-submission prevention, a short client cooldown and a honeypot. The provider supplies its own filtering; client checks supplement it and cannot guarantee spam prevention. Native validation and server/provider response validation run before success feedback. A successful response says the service accepted the message, not that it arrived in the inbox. Failure preserves entered text and provides the direct-email alternative. Without JavaScript the form uses the provider’s native POST and verification flow. No automatic visitor email replies are configured.

**Activation is required:** the owner must confirm FormSubmit’s activation email. Delivery cannot be called verified until an end-to-end live submission arrives in the inbox. The portfolio privacy page explains this processing and local preferences. Provider terms may change independently.

## Search and sharing

Pages have titles, descriptions, canonical links, Open Graph/Twitter tags, a 1200 × 630 share image, favicon, Person structured data, robots.txt and an automatically generated sitemap. There is a standalone full article, privacy page, submission return page and 404 page. No analytics are enabled.

## Build and deployment

Use Node 24 and pnpm 11.25.0. Install with `pnpm install --frozen-lockfile`, validate with `pnpm check`, run focused interaction tests with `pnpm test`, and build with `pnpm build`. `pnpm dev` serves development; `pnpm preview --port 4173` serves the built production output. The output directory is `dist/` and is ignored by Git. The user-site URL has no repository-name base path.

The `.github/workflows/deploy.yml` workflow validates, tests and builds both pushes and pull requests. Only main-branch pushes or manual main-branch runs deploy. Deployment uses the GitHub Pages environment with contents-read and narrowly scoped pages-write/id-token-write permissions. A failing build blocks that release. Settings → Pages must use GitHub Actions. Locked dependencies and approved esbuild/sharp build scripts make installation reproducible.

## Pages CMS

`.pages.yml` defines profile, credentials, projects and Markdown Insights editors and maps uploads from `public/uploads` to `/uploads`. Connect the GitHub account at https://app.pagescms.org, select only this repository where possible, and choose main. Saving to the publishing branch triggers the deployment workflow. Account authorization must be completed by the owner. The files remain editable through GitHub or locally if CMS is unavailable.

To replace the CV, upload a PDF and update profile.cv, or replace the existing `public/documents/byamugisha-alban-cv.pdf`. To add a credential, enter an independent unique ID, exact title and issuer, and its HTTPS verification URL and/or uploaded document. Keep dates empty if uncertain. Preview and verify the link after publishing. Do not rename existing article files casually because their filenames determine public URLs. Check Actions after saving; a save alone does not prove the site has updated.

## Remaining external dependencies

The supplied certificate originals had moved from Downloads to Trash. Copies of only those previously authorized files were added to public/credentials; Trash and other source folders were left intact. All 25 records now have a verification link or supplied document. CMS authorization, provider activation, and actual deployed-site delivery verification require owner/account access. Do not claim these completed based only on local tests.


## Downloads import update

Copied the newly supplied Full Stack Developer PDF and the current AI & Machine Learning Basics PDF from Downloads into public/credentials. Full Stack Developer’s printed date is 20 July 2026. Duplicate download variants were checked and kept out of the public list; the credential count remains 25. Downloads files were not cut or deleted. The public document collection contains 24 originals; HP LIFE Ambassador remains a linked badge.


## Owner revision — 13 October 2026

Removed the Effects settings control and its stored-preference handlers at the owner’s request. Motion now follows the device reduced-motion setting automatically; saved choices from the removed control are ignored. Theme switching remains available. This supersedes earlier references to a public Effects selector.
