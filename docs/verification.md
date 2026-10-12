# Verification and launch acceptance

Status: verification plan only. No website build or live deployment has been verified.

| Area | Required checks |
| --- | --- |
| Content | Correct name/location/contact mapping; factual biography; implemented projects only; 25 unique credential entries; article preserved; no placeholder claims |
| Credentials | Exact titles/issuers; known dates only; preview fallback; working local files; external destinations recorded; separate competition/badge semantics without separate topic sections |
| Build | Locked dependency install, Astro/type checks, content schema checks, production build and generated asset references |
| Responsive design | Phone/tablet/desktop widths, long titles, menus, form labels, grid ordering, no horizontal overflow |
| Accessibility | Keyboard-only navigation, focus/skip link, headings/labels, contrast, alt text, screen-reader handling of animated text |
| Themes | System default, saved manual choice, storage unavailable, both themes across every page |
| Motion | Reduced motion from initial load, pause/resume, no offscreen loops, static WebGL fallback, hidden-tab behavior |
| Performance | Defer 3D and previews, optimized portraits/fonts, stable layout, bounded blur and animation, mobile profiling |
| Contact | Invalid input, pending state, provider failure, success state, actual receipt at owner email, direct links |
| SEO/assets | Unique titles, canonicals, favicon at small sizes, social preview, sitemap, robots, 404, CV and certificate MIME behavior |
| CMS | Authentication, correct repo/branch, record edits/uploads, valid commits, draft exclusion, successful save-to-deploy workflow |
| Production | HTTPS root/nested pages/assets, external links, public editor separation, recovery procedure |

Use real browser inspection for visual and interactive behavior when available, automated accessibility tools as supplements, and targeted tests for preference handling/content validation/form failure behavior. Avoid tests that merely mirror CSS or markup. Record actual tool versions, results, devices/viewports, date, and remaining limitations in a verification report. Do not describe a build check as full accessibility or performance certification.

External providers may restrict automated inspection. Distinguish a supplied destination from a successfully opened/verified credential. Files read locally establish document content; they do not establish issuer authenticity by themselves.

Launch requires no material known failures in navigation, reading, downloads, editing/building, or contact delivery. If the form provider is not ready, keep launch pending or obtain a deliberate scope change; never ship a form that falsely reports delivery.

## Latest owner clarification — 12 October 2026

Omit uncertain dates. Credentials supplied only as external links do not need preview images; retain clickable View credential links. Uploaded certificates can have local previews. This clarification supersedes earlier requirements to obtain remote-only previews or clarify every date.
