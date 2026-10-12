# Portfolio documentation

Owner: Byamugisha Alban. Updated: 12 October 2026.

This is the agreed requirements and proposed implementation specification. Website implementation, CMS connection, form setup, and deployment have not started. Existing artifacts are planning documents and three generated portrait variants. Instructions describing future behavior are acceptance requirements, not claims that features already work.

## Reading order

1. [Project brief](project-brief.md): purpose, audience, confirmed boundaries.
2. [Design specification](design-specification.md): pages, themes, layout, motion, accessibility.
3. [Content inventory](content-inventory.md): profile, links, projects, article, assets.
4. [Credential register](credentials.md): all 25 entries and evidence status.
5. [Architecture](architecture.md): framework, components, content schemas, dependencies.
6. [CMS and editing guide](cms-and-editing.md): planned editor setup and update procedures.
7. [Deployment guide](deployment.md): GitHub Pages setup, releases, recovery.
8. [Verification plan](verification.md): checks and launch requirements.
9. [Maintenance guide](maintenance.md): ongoing updates and dependency care.
10. [Development roadmap](development-roadmap.md), [decisions](decisions.md), and [open questions](open-questions.md).

## Evidence and status convention

- Confirmed: directly requested by the owner or present in inspected source material.
- Proposed: implementation choice to verify during development.
- Document inspected: title/details read from an uploaded file; this is not independent issuer verification.
- Owner confirmed: title confirmed by the owner when the remote page could not be read.
- Pending: unknown, unavailable, or ambiguous. Never turn a missing value into an invented claim.

The detailed guides will be updated with actual package versions, commands, screenshots where useful, final editor behavior, workflow results, and live URLs as implementation progresses. This documentation does not promise lifetime compatibility with third-party services.


## Implementation update — 13 October 2026

Recommendations 1 and 3–7 were implemented; the existing project wording was preserved. See [implementation](implementation.md) and [production verification](production-verification.md) for current source structure, exact commands, certificate import, checks and external account requirements. The maintained preview is the built Astro site at the root local URL; `/design/index.html` redirects there.
