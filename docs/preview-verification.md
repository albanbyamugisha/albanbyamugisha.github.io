# Preview revision 2 verification

Date: 12 October 2026. Local design prototype only; not deployed.

## Browser checks

Inspected the revised preview with installed Firefox through its local WebDriver. Checked desktop at 1440 CSS pixels and the browser’s narrow-window layout. Both reported no horizontal document overflow after image dimensions were corrected. Theme control switched the portrait and accessible label. Keyboard focus displayed a tooltip. Scrolling triggered article reveal and made Back to top visible. Mobile navigation expanded; all ten social destinations contained SVG icons. The loader cleared after document load, all 25 credential cards remained present, and no pause button remained. No browser script errors were captured during the verified run. The article illustration lazy-loads when its section approaches the viewport.

## Asset and behavior notes

The supplied favicon is an RGBA PNG with a transparent exterior and circular portrait; copied unchanged. The generated Insights illustration is stored in public/images/insights-engineering-ai.png. Core content is visible without JavaScript and the loader is hidden by default until scripting activates it. System reduced-motion preferences suppress decorative motion without a visible pause control. Background Canvas is bounded and stops drawing while the tab is hidden.

## Limits

This is local prototype QA, not a complete production accessibility/performance audit or independent verification of external social/credential links. Full Astro routes, CMS integration, live form delivery, document asset integration, and real WebGL 3D implementation are still pending. Final phone-device and cross-browser review will occur during implementation.


## Revision 3 — 13 October 2026

Firefox browser verification confirmed the original H.264 hero video loads with readyState 4, an eight-second duration, muted playback, and automatic pause when the hero leaves the viewport. Five navigation icons and eleven social icons render, including TikTok. The contact form has a Send Message submit button and three required fields. It composes an email with the visitor’s details; delivery still happens in the visitor’s email application. A connected form provider remains part of production implementation.

Scroll-linked progress reached approximately 90% at Insights, with the Insights navigation item active. Reveal effects, back-to-top control, theme changes, and focus tooltips remained functional. Desktop and narrow Firefox layouts had no document horizontal overflow. Lazy article media loads when its section comes into view. External link feedback labels destination handoff rather than claiming to observe cross-origin load completion.

Original video: 1280 × 720, 24 frames per second, eight seconds, approximately 1.34 MB. Its procedural source and generation metadata are saved under design/. No deployment or message delivery was performed during these checks.
