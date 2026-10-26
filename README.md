<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/cohnsoft/logos/lockup/cohnsoft-lockup-dark@2x.png">
  <img src="brand/cohnsoft/logos/lockup/cohnsoft-lockup@2x.png" width="320" alt="Cohnsoft">
</picture>

# Cohn Banshees

**A product of Cohnsoft.**

Cohnsoft was founded by Demetria Althea Cohn.

This repository is a project scaffold. It does not contain an application, game, installer, or released product yet. **Cohn Banshees** is the proposed product name for review; the GitHub repository remains `danecohn/banshees`.

## Brand foundation

The official Cohnsoft logos, platform icons, Cohn Sans font files, Golden Gate CSS and design tokens are vendored in [`brand/cohnsoft/`](brand/cohnsoft/). Assets are copied without redrawing, recolouring or runtime hotlinking. Their source commit and SHA-256 hashes are recorded in [`UPSTREAM.json`](brand/cohnsoft/UPSTREAM.json). The product name and exact credit lines are defined in [`brand/product.json`](brand/product.json).

[Brand guide](brand/cohnsoft/BRAND.md) · [Pilot scope and validation](docs/REBRAND.md) · [Company rollout plan](docs/COHNSOFT-ROLLOUT.md)

## Review the identity locally

Requires Node.js 24 or later for the documentation builder and checks; no dependencies or account are needed.

```sh
node tools/build-preview.mjs
node --test test/*.test.mjs
python3 -m http.server 4376 --bind 127.0.0.1
```

Open `http://localhost:4376/docs/brand-preview-light.html` or `http://localhost:4376/docs/brand-preview-dark.html`. These are **documentation previews**, not application screens. They also work when opened as local files. All fonts, CSS and images are bundled in this repository.

There is no application build or test suite to run, no installed data to migrate and no packaged app to launch or sign. Those checks will become required when an application is implemented. Nothing in this pilot deploys a service, publishes a release, changes DNS or redirects existing links.

## Licences

The repository's original GPL-3.0 licence is preserved byte-for-byte in [`LICENSE`](LICENSE). Vendored Cohnsoft CSS is GPL-3.0-only; its licence is included in [`brand/cohnsoft/LICENSE`](brand/cohnsoft/LICENSE). Cohn Sans is distributed under SIL OFL 1.1 with its copyright and licence in [`fonts/OFL.txt`](brand/cohnsoft/fonts/OFL.txt). Cohnsoft names and logos remain Cohnsoft's marks, subject to the source repository's brand usage rules.
