# Design specification

## Visual identity

Use the full name “Byamugisha Alban” as a text wordmark. Derive browser favicon sizes from the original portrait using a close face crop and inspect at small sizes. Keep the favicon recognizable without fine decorative detail. Generated portraits are separate assets; retain the original photograph.

The visual direction uses electric blue and restrained violet accents, layered surfaces, spatial lighting, and strong typography. Final color values and fonts will be chosen in the design preview and tested for contrast. Dark surfaces use deep navy; light surfaces use off-white and pale blue. Avoid applying low-opacity glass to text itself.

## Page structure

| Page | Structure and visitor purpose |
| --- | --- |
| Home | Name, factual introduction, theme-matched portrait, animated headline, explore/contact actions, selected project cards, latest insight, selected learning links |
| About | Background, education timeline, interests, language labels, CV view/download; no invented employment |
| Projects | Plain descriptions, technologies, repository links, academic/personal/group labels; no screenshots or planning projects |
| Skills & Learning | Skills grouped for readability; a single unified grid of all 25 credentials and recognitions with previews and links |
| Insights | Article list with title, date, excerpt; individual reading page with full article and LinkedIn source link |
| Contact | Name/email/message form, direct email, WhatsApp, calling, social links, general invitation |

The credential grid may distinguish an item’s type in its text but must not split entries into separate topic sections or filters. On mobile, grids become a readable single column. Avoid artificial pagination for 25 entries unless later evidence requires it; defer preview loading instead.

## Motion map

| Requested effect | Planned placement | Constraints and fallback |
| --- | --- | --- |
| Interactive 3D, WebGL/Canvas | Hero orbital geometry and particles | Load only where used, cap resolution/particle count, static gradient fallback on unsupported devices/context loss |
| Ambient/dynamic backgrounds | Hero and selected section accents | Slow, low contrast; do not move behind long article text |
| CSS/SVG animations | Gradient accents and orbital motifs | Prefer transforms/opacity; avoid continuous layout recalculation |
| GPU-friendly micro-interactions | Buttons, navigation, cards | Modest distance/duration; GPU acceleration depends on browser/device, not a guaranteed performance result |
| Kinetic typography/variable fonts | Main heading and section accents | Keep readable fallback fonts; limited axes and movement |
| Typewriter/typing/rotating text | One rotating hero subtitle | Do not repeatedly announce updates to screen readers; reserve space to prevent layout shifts |
| Scrambled text | Brief heading transition | Settle quickly to readable words; static accessible equivalent |
| Ticker | Short decorative band of relevant interests | Pause control, no essential information exclusive to moving text |
| Parallax and Z-axis depth | Hero layers and selected reveals | Small depth range, avoid scroll hijacking, simplify on touch/mobile |
| Scroll-driven transitions | Section introductions | Content visible without animation; progressive enhancement for browser support |
| Spatial themes | Consistent lighting and layer depth in both themes | Persistent user preference and system default |
| Glassmorphism | Navigation/cards with translucent layers | Opaque fallback; limited blur area; contrast tested over actual backgrounds |
| Bento grids | Home highlights and learning/project cards | Logical reading order, balanced card sizes, no forced empty filler |

No video footage is available. Initial motion will be code-generated; do not invent project demos or add video/Lottie dependencies merely to satisfy overlapping terminology. Lottie, cinemagraphs, and video are optional future formats when suitable assets exist.

## Controls and accessibility

Provide a global theme control; no visible motion pause control per owner revision. Respect prefers-reduced-motion from first render. Persist explicit preferences where storage is available; remain usable when storage is blocked. Pausing motion stops Canvas loops, text rotation, ticker, and CSS animations. Pause background rendering when offscreen or the tab is hidden. Mouse-reactive effects are decorative, and touch interactions do not depend on hover.

Use semantic landmarks, a skip link, visible keyboard focus, correctly labeled controls, meaningful image alt text, accessible mobile navigation, and sensible heading hierarchy. Aim for WCAG 2.2 AA: normal text contrast at least 4.5:1 and large text at least 3:1. Validate interactive boundaries and focus styles. Browser-native links to certificates remain available independently of previews.

## Design review deliverables

Preview desktop and mobile layouts for both themes before full implementation. Show the hero, navigation, bento cards, credential section, article reading view, and contact form. Review real content length and the owner’s likeness. Record final tokens, font licenses, responsive rules, and animation durations after the preview is settled.

## Latest owner clarification — 12 October 2026

Omit uncertain dates. Credentials supplied only as external links do not need preview images; retain clickable View credential links. Uploaded certificates can have local previews. This clarification supersedes earlier requirements to obtain remote-only previews or clarify every date.

## Preview revision 2 — owner feedback

Use the supplied transparent circular portrait as favicon. Remove the visible motion pause control; keep system reduced-motion support. Use icons with accessible names/tooltips for theme, contact, and social actions. Replace the portrait crop with a spatial glass frame, halo, scanning accent, and scroll reveal. Add global particle-network Canvas, moving gradient lighting, grid/beam motion throughout the page, section typing accents, reveal-on-scroll, next-section/back-to-top controls, and a portrait-based loader tied to actual loading with a safety timeout. Generate a matching Insights illustration. Tooltips appear on hover and keyboard focus, with labels independent of tooltip visibility. Full 3D/WebGL remains a subsequent implementation task.

## Preview revision 3 — 13 October 2026

Original 8-second 1280×720, 24 fps silent H.264 hero video, authored procedurally for software engineering/AI: nested architecture lattices, neural nodes, and data traces. Asset: public/videos/hero-neural-systems.mp4; poster and generation script retained. Muted/loop/playsinline, themed readability overlays, offscreen/hidden-tab pause, reduced-motion/data-saver fallback, buffering/error handling.

Navigation labels now include matching icons, a layered dock, active-section state, and scroll progress. TikTok added: https://www.tiktok.com/@albanbyamugisha. Expand hover lighting to cards, credentials, skills, portrait, form fields, buttons, and article. Add gentle four-second signal blinking (no large-area rapid strobe) and scroll-linked portrait/article depth.

Send Message is present with required fields and native validation. Until the external provider is connected, it opens a prefilled email draft; status explicitly says the website has not sent the message. A nonblocking portrait activity indicator covers image loading, video buffering, section navigation, external-link handoffs, and email composition. Handoff indicators cannot observe cross-origin load completion and never claim a remote destination loaded successfully. Controls that perform no loading, such as theme switching, stay responsive without artificial blocking loaders.


## Resource action styling — 13 October 2026

Credential verification, uploaded certificates and repository destinations now use a shared ResourceLink component. Actions have a blue/violet tinted surface, inset icon, thin border, external-link arrow, subtle hover shine, visible keyboard focus, and contextual accessible labels/tooltips. Uploaded-document actions use a quieter secondary surface. Labels wrap on narrow cards; touch targets are at least 46px high. Motion respects the device reduced-motion setting. Destinations and project descriptions are unchanged.


## Contact feedback — 13 October 2026

Contact submission now uses an inline status card: blue spinner for pending, green check for accepted delivery, warm amber alert for failure. Success reads “Thanks for reaching out.” and states only provider acceptance for delivery, without claiming inbox arrival. Explicit rejection preserves text and offers Try again and Email me instead. Network/timeout failures say the outcome could not be confirmed. The email fallback composes the existing visitor text. Validation and cooldown issues receive specific messages without offering a misleading retry action. Feedback is announced through an atomic polite live region, uses symbols and text alongside color, respects reduced motion, and does not steal focus.
