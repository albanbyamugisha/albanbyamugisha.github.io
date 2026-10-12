# Long-term maintenance

## Content updates

Use the CMS procedures for routine content, preserving stable slugs and public asset URLs. Confirm titles/dates against source documents and check each new external link. After saving, verify a successful deployment and inspect the changed page. Keep a copy of original certificates and the latest CV outside the deployed website as well as the public copies required by the site.

## Dependency and service updates

Periodically review supported Node/Astro versions, dependency notices, CMS compatibility, and form-provider service limits. Read release/migration notes before upgrades, update the lockfile, run appropriate checks, review both themes/motion, and deploy a verified change. Avoid indiscriminate upgrades directly on the publishing branch.

## Ownership and backup

GitHub remains the source of truth for published content and code. Git history supports recovery but does not replace retaining original local source assets. Keep repository access under the owner’s account and review collaborator/CMS app permissions when people or services change. Credentials used by tooling belong in approved secret storage, never public records.

## Failure response

For failed builds inspect the relevant workflow error and affected content/configuration. For missing email check provider logs/account activation and test a new submission. For broken credential links provide the uploaded file when available and correct the external destination without claiming renewed issuer verification. For visual regressions compare the affected theme/device and reduce expensive effects if needed.

## Extending the site

New articles/projects/credentials should reuse existing records and templates. New content types require coordinated schema, CMS, layout, and documentation updates. Backend features need external hosting; GitHub Pages remains the static frontend. If the editor or hosting service changes, preserve Markdown/data assets and document new publication behavior.

## Handover checklist

Provide tested setup commands, exact versions, final repository/live URL, CMS sign-in/update examples, form-provider configuration, asset replacement instructions, verification report, and a demonstrated recovery example. Update this guide whenever the actual operating procedure changes.
