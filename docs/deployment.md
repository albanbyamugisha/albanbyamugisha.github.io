# GitHub Pages deployment guide

Status: Astro build, locked dependencies and `.github/workflows/deploy.yml` are implemented and locally verified. Public deployment is not yet claimed. See [implementation](implementation.md) and [production verification](production-verification.md).

## Target and prerequisites

Target: https://albanbyamugisha.github.io. The account-owned user-site repository must be named `albanbyamugisha.github.io`; confirm availability rather than rename unrelated repositories. The workspace folder name does not itself create a repository or a website. GitHub credentials/admin access and successful static builds are required.

Sources: [GitHub Pages creation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Astro deployment](https://docs.astro.build/en/guides/deploy/github/).

## Planned setup

1. Initialize the selected workspace as a usable Git repository and set the remote only after confirming the destination.
2. Exclude dependencies, build output, local tooling state, environment secrets, and private provenance details as appropriate.
3. Configure Astro `site` to the target URL. A root user site normally needs no repository-name base path; review this if the deployment destination changes.
4. Build locally and confirm generated pages, assets, CV, certificate files, and 404 output.
5. Add a deployment workflow using compatible supported actions. Record their actual versions and Node runtime after setup.
6. In GitHub Settings → Pages, select GitHub Actions as the publishing source.
7. Grant the deployment workflow required permissions: contents read, pages write, id-token write. Use the GitHub Pages environment and prevent overlapping deployments from racing.
8. Trigger deployment from the chosen publishing branch; pull-request checks should validate builds without deploying public changes.
9. Verify workflow/environment output and inspect the public root plus nested pages directly.

## Workflow stages

Checkout → install locked dependencies → validate content/types → build static output → upload Pages artifact → deploy. Failed validation/build blocks publication. Keep the successful site available when a subsequent build fails. CMS saves must reach the publishing branch to trigger the configured deployment.

## Verified local commands

Use Node 24 and pnpm 11.25.0. `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm test`, `pnpm build`, and `pnpm preview --port 4173` are configured. The static output is `dist/`. For editing use `pnpm dev`. The workflow uses checkout v4, pnpm setup v4, Node setup v4, Pages artifact upload v3 and Pages deployment v4. It installs locked dependencies, validates, tests, builds, then deploys only main. Pull requests validate without publishing. The root user-site URL requires no base prefix.

## Release verification

Check the live homepage, direct nested routes, theme/motion controls, CV download, certificate previews/links, favicon, LinkedIn article link, and contact delivery. Open links using the deployment base URL rather than local filesystem locations. Allow for deployment/cache delay before diagnosing a stale page.

## Recovery

Find the failed Actions run and inspect its first relevant error. Content parsing errors usually require editing the affected record. Missing assets require correcting their path/case. Incorrect base paths require configuration correction and rebuilding. Restore a known-good commit or revert the specific faulty change through normal Git history, then redeploy. Do not delete unrelated work to recover the site.
