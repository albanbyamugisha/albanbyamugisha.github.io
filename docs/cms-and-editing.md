# Pages CMS and content editing

Status: `.pages.yml` and the editable JSON/Markdown files are implemented. Owner GitHub sign-in/installation and an actual CMS save-to-deploy test remain pending. See [implementation](implementation.md).

## How it works

Pages CMS provides authenticated editing forms for files stored in GitHub. The public site is generated from these files. Visitors do not log in to read the portfolio. Repository permissions and the CMS authentication determine who can edit. Public repository files, including certificate originals committed to it, are publicly readable.

Configuration is a root `.pages.yml`, read per repository and branch. The current .pages.yml defines profile, project and credential JSON file editors, a Markdown Insights collection, and public/uploads media storage matching the validated Astro schemas. Official sources: [CMS introduction](https://pagescms.org/docs/), [configuration](https://pagescms.org/docs/configuration/), [GitHub file editing](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

## Setup sequence

1. Establish the GitHub repository and working branch.
2. Create portable content files and Astro schemas.
3. Configure CMS labels, field types, required values, collection paths, and upload directories.
4. Connect Pages CMS with GitHub, restricting installation access to the intended repository where supported. The owner completes sign-in/account steps.
5. Select the repository/branch in the CMS; verify it loads the configuration.
6. Edit a draft/test record, inspect the resulting commit and file format, and verify the build can parse it.
7. Test media upload URLs, Markdown formatting, repeated profile fields, and optional credential dates.
8. Confirm the actual save/branch/merge behavior and deployment trigger with this installation. Record the workflow with examples before handover; do not assume Save means immediate public publication.

## Routine article update

Open the Insights editor, create/edit an article, enter the title/date/excerpt/body and optional original link, then save a draft. Verify headings, links, and paragraphs. When ready, change draft status and save using the configured publishing workflow. Check GitHub Actions for a successful run, then inspect the live article. Publication requires a successful build and deployment after the change reaches the publishing branch.

## Project update

Edit the project record, preserve an existing slug unless intentionally changing its URL, describe purpose/features factually, set technologies and academic/personal/group type, and add a repository link if public. Do not add screenshots by default. Preview the page and verify the repository destination after publishing.

## Credential update

Create an entry with an independent id, exact certificate title, issuer, kind, and a known date or an empty date. Add the verificationUrl when supplied; upload the original PDF/image into the document field for local viewing. Uploaded documents open directly in the browser; link-only entries do not need preview images. Check name/title/date against the document. Use a distinct identifier for separate credentials even if source documents have conflicting printed IDs. Keep all entries in the same public grid.

## LinkedIn and credential sources

The Credentials section currently has one source: Pages CMS edits `src/data/credentials.json`, Astro validates it in `src/lib/data.ts`, and `src/components/Credentials.astro` renders it. Profile education is separate and is edited in `src/data/profile.json`. The site and deployment workflow do not currently call LinkedIn; no LinkedIn credentials or sync secrets are required for builds. Keep using Pages CMS as the source of truth until an approved API integration is available.

LinkedIn's self-service **Sign In with LinkedIn using OpenID Connect** product uses the `openid` and `profile` scopes, with `email` optional. It can provide basic authenticated-member identity/profile claims such as a LinkedIn member identifier, name, profile picture, and locale; email claims are optional. These scopes do not provide the portfolio's course certificates, issuers, award dates, verification links, or uploaded documents, and do not provide the education and experience records needed to replace the manually maintained content. Keep those fields in Pages CMS unless LinkedIn grants access to a specific official API that returns them.

Before implementing a sync, first enable a LinkedIn Developer app and obtain explicit access to the official API product and permissions that expose the particular fields to import. The OpenID Connect product alone is insufficient for credentials, education, or experience. The app must also have a registered OAuth redirect URI and member-authorized OAuth consent. Only after LinkedIn confirms the applicable product, scopes, and access should a server-side/GitHub Actions sync be designed. Any client secret and OAuth tokens must be GitHub Actions secrets, never site code or public content. A future merge must retain CMS-edited values as overrides and must leave the current CMS-only build working when LinkedIn is unavailable.

Official references: [Sign In with LinkedIn using OpenID Connect](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2), [Getting Access to LinkedIn APIs](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access), and [Profile API](https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api).

## Profile and CV update

Use the Profile editor for introduction, location, contacts, skills, languages, and education. Replace the public CV file intentionally, preserve its public URL where practical, and check Download CV. Certificate uploads and CV updates should never expose unrelated files from the local Downloads folder.

## Recovery and independence

If the editor is unavailable, edit the same content files through GitHub or locally. Commit and follow the normal build/deployment procedure. If a save introduced an error, inspect the failed build, fix the record or revert the specific content commit, and redeploy. CMS interface validation supplements rather than replaces Astro build validation.

## Changes requiring development

New page structures, new content fields, navigation changes, theme redesigns, effects, provider changes, and dependency upgrades require source/configuration updates. Keep CMS fields and Astro schemas synchronized. Content editing does not eliminate maintenance or third-party availability requirements.

## Latest owner clarification — 12 October 2026

Omit uncertain dates. Credentials supplied only as external links do not need preview images; retain clickable View credential links. Uploaded certificates can have local previews. This clarification supersedes earlier requirements to obtain remote-only previews or clarify every date.

## Insight cover images

In Insights, use **Cover image** to upload or select an image. Files go into `public/uploads` and the editor stores `/uploads/filename` in the article’s `image` field. Enter a useful **Image description** for screen readers. Images are optional; existing articles still build without them. The selected cover appears above the body on the article page. The current homepage featured article remains separately styled. Save and wait for the GitHub Actions deployment to pass, then check the article URL.

After CMS edits, run `git pull --rebase origin main` before making local changes so the local checkout includes the new articles and uploads.
