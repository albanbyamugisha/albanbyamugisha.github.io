# Byamugisha Alban — professional portfolio

An Astro + TypeScript portfolio for https://albanbyamugisha.github.io, with persistent dark/light themes, an original hero video, scroll reveals, searchable credentials, a contact form, and Markdown Insights. Motion follows the visitor’s reduced-motion preference; there is no visible effects-settings control. Loading indicators use the round portrait without visible captions.

## Run locally

Use Node 24 and pnpm 11.25.0 (packageManager is pinned).

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm preview --port 4173
```

For development use `pnpm dev`. Preview serves the static build at http://127.0.0.1:4173/. The old `/design/index.html` preview address redirects to `/` in the production build.

## Edit content

- Profile, contacts, education and skills: `src/data/profile.json`.
- Project descriptions and optional workflow/highlights: `src/data/projects.json`.
- Credentials (25 at launch): `src/data/credentials.json`.
- Articles: `src/content/insights/*.md`; set `draft: true` to omit a route. Optional `image` and `imageAlt` fields display a cover above the article body.
- Certificate originals: `public/credentials/`; CV: `public/documents/`.
- Pages CMS editor configuration: `.pages.yml`; edit the repository’s `main` branch at https://app.pagescms.org. The owner has connected the editor.
- CMS uploads: `public/uploads/`, published at `/uploads/`. Insights has **Cover image** and **Image description** fields.

CMS saves update GitHub and trigger deployment. Wait for a successful Actions run before checking the live site. Before local edits, run `git pull --rebase origin main` to include CMS changes.

**Current limitation:** the homepage Insights feature is manually defined. New published articles receive their own pages, but are not automatically listed on the homepage yet.

See [the CMS editing guide](docs/cms-and-editing.md) for routine updates.

See [the implementation guide](docs/implementation.md) for fields, interactions, privacy, provider behavior, and content maintenance. [Verification results](docs/production-verification.md) distinguish local automated checks from external account/delivery checks.

## Publish

The GitHub Pages workflow in `.github/workflows/deploy.yml` validates, tests and builds changes. Pushes to main deploy; pull requests only validate. Use GitHub Settings → Pages → GitHub Actions. The lockfile is committed with source, while dependencies and `dist/` are ignored.

The owner has pushed the site and reported a successful GitHub Actions deployment. For subsequent local changes:

```sh
pnpm check
pnpm test
pnpm build
git add .
git commit -m "Update portfolio"
git -c http.version=HTTP/1.1 push
```

HTTP/1.1 is used here because the initial upload encountered a connection reset; it applies only to that command.

FormSubmit handles contact messages for the public email. The form shows sending, accepted, failed, and unconfirmed-response states. Failed submissions preserve the visitor’s text and provide retry and email alternatives. An accepted response does not independently confirm inbox delivery. The owner confirmed delivery during setup, later reported a live submission failure, and most recently reported everything was OK; that later issue has not been independently diagnosed. Automated form tests intercept provider responses and do not send real messages.

## Documentation

[Documentation index](docs/index.md) · [Implementation](docs/implementation.md) · [Deployment](docs/deployment.md) · [Editing](docs/cms-and-editing.md) · [Production verification](docs/production-verification.md).

The original discovery and preview records are retained as history. The implementation guide and production verification describe the current code. The internal credential provenance register contains local source paths and is excluded from publication.
