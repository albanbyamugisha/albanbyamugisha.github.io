# Byamugisha Alban — professional portfolio

An Astro + TypeScript portfolio for https://albanbyamugisha.github.io, with persistent themes, motion preferences, an original hero video, searchable credentials, a contact form, and Markdown Insights. The five existing project descriptions are preserved.

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
- Existing project wording: `src/data/projects.json`.
- All 25 credentials: `src/data/credentials.json`.
- Articles: `src/content/insights/*.md`; set `draft: true` to omit a route.
- Certificate originals: `public/credentials/`; CV: `public/documents/`.
- Pages CMS editor configuration: `.pages.yml`; connect your account at https://app.pagescms.org.

See [the implementation guide](docs/implementation.md) for fields, interactions, privacy, provider behavior, and content maintenance. [Verification results](docs/production-verification.md) distinguish local automated checks from external account/delivery checks.

## Publish

The GitHub Pages workflow in `.github/workflows/deploy.yml` validates, tests and builds changes. Pushes to main deploy; pull requests only validate. Use GitHub Settings → Pages → GitHub Actions. The lockfile is committed with source, while dependencies and `dist/` are ignored.

FormSubmit is configured for the public contact email. Confirm its activation email before treating delivery as live. The local form tests intercept provider responses and do not send mail. Pages CMS account authorization and actual deployed inbox delivery remain owner/account steps.

## Documentation

[Documentation index](docs/index.md) · [Implementation](docs/implementation.md) · [Deployment](docs/deployment.md) · [Editing](docs/cms-and-editing.md) · [Production verification](docs/production-verification.md).

The original discovery and preview records are retained as history. The implementation guide and production verification describe the current code. The internal credential provenance register contains local source paths and is excluded from publication.
