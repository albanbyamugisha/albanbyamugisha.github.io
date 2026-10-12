# Development roadmap

| Phase | Deliverables | Completion evidence |
| --- | --- | --- |
| Discovery | Brief, content inventory, 25-entry credential register | Owner requirements consolidated; remaining factual issues explicit |
| Technical planning | Architecture, CMS/content schemas, deployment/form plan | Data model and Pages constraints reconciled |
| Design preview | Desktop/mobile layouts, both themes, motion examples | Owner reviews concrete visual direction before full build |
| Foundation | Astro setup, locked dependencies, layouts, tokens, content schemas | Static build and core navigation work |
| Page implementation | Six primary pages, article route, 404, assets, unified credentials | Confirmed content present and all interactions functional |
| Integrations | CMS forms/media, form provider, GitHub workflow | Test edits produce valid builds; actual email received |
| Verification | Browser/accessibility/performance/build/content report | Material failures fixed; limits documented |
| Deployment | GitHub Pages production release | Public root/nested pages and essential actions verified |
| Handover | Tested editing/deployment/maintenance instructions | Owner can update content and recover a failed change |

Current phase: requirements consolidation and planning documentation. Source implementation/CMS/deployment are not complete. Do not equate a proposed workflow with a tested one.


## Implementation update — 13 October 2026

Recommendations 1 and 3–7 were implemented; the existing project wording was preserved. See [implementation](implementation.md) and [production verification](production-verification.md) for current source structure, exact commands, certificate import, checks and external account requirements. The maintained preview is the built Astro site at the root local URL; `/design/index.html` redirects there.
