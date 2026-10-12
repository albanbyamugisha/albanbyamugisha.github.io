# Production verification — 13 October 2026

## Verified locally

Astro type checks: zero errors, warnings or hints. Focused Node tests cover credential title/issuer search, spam-field and message validation, and provider response interpretation, including HTTP failure and network rejection. The production static build succeeds and generates homepage, full article, privacy, message return, 404 and sitemap output.

Chromium, controlled by Playwright, passed 15 browser checks: static name/focus and canonical metadata; eight of 25 credentials initially visible; expansion to all 25; title/issuer search including no results; saved effects and theme choices; required-field validation; portrait throbber during form requests; failure retaining text and releasing busy state; acceptance feedback resetting the form; no horizontal overflow at 375, 768 and 1024 CSS pixels; full article and supporting routes; system reduced-motion preventing the video source from loading; and no-JavaScript visibility/native form fallback.

axe-core WCAG 2 A/AA and 2.1 AA scans reported zero violations on the homepage in dark and light themes and on the full article. This is an automated scan, not a claim of complete accessibility compliance. Keyboard/focus states are implemented; real assistive-technology use and physical devices remain useful launch checks.

Contact requests in browser tests were intercepted locally. The deliberately simulated HTTP 503 verifies failure handling and is not a real FormSubmit outage. No visitor test message was sent. Runtime error collection was empty. Local route checks returned HTTP 200 for the article, privacy page, CV, sitemap, robots.txt, social image and direct 404.html file.

## Performance evidence

Astro converted the dark and light portrait PNGs from approximately 2,140 KB and 2,118 KB to 31 KB and 28 KB WebP assets. The Insights artwork became approximately 71 KB. The real hero video remains approximately 1.34 MB, is muted and looping, and is paused offscreen/hidden. Reduced-effects or reduced-motion sessions do not request the video. The browser download path uses poster fallback for data saver/slow 2G and unavailable autoplay. The favicon is optimized; social previews use a 1200 × 630 PNG. Fonts are self-hosted with OFL licenses. No tracking analytics or client framework runtime is included.

Network throttling, hardware-specific battery/GPU behavior and real mobile-device checks were not certified by these local tests. Do not treat browser emulation as physical-device testing or invent Lighthouse scores.

## Account and external verification

FormSubmit configuration and mocked response handling are complete. An attempted activation POST was blocked by automatic approval review because it would send the contact email and an activation-check payload to a third-party service. It was not retried or bypassed. Owner approval is needed before that specific activation test; the owner must then confirm the activation email. Actual delivery remains unverified until a message arrives in the owner inbox.

Pages CMS configuration is complete. GitHub account installation/sign-in and an actual CMS save → successful Actions deployment require owner account access. The GitHub Pages workflow is prepared and locally validated; no public deployment is claimed without a successful remote workflow and live URL check.

## Certificate import

Only previously supplied or newly requested credential files were copied. Earlier Downloads originals were found in Trash; copies were imported while leaving source locations untouched. The newer Full Stack Developer PDF was copied from Downloads and linked to its existing record. The current AI & Machine Learning Basics file was also copied. Duplicate variants were not added as separate certifications. There are 25 records, 24 supplied local certificate documents and one linked HP LIFE Ambassador badge.


## FormSubmit activation attempt — 13 October 2026

The owner explicitly approved one activation test. The request was made once and returned HTTP 403 / Cloudflare Error 1010 (browser-signature access denied). No retry or alternate-signature workaround was attempted. Form activation and email delivery are not confirmed. The owner can perform the normal form submission in their browser and check for the provider activation email; if their browser is also denied, use the provider’s support channel or choose another provider.
