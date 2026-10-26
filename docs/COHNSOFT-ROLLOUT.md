# Cohnsoft repository rollout

Inventory: 26 repositories returned by the connected GitHub account for `danecohn`; the next page was empty. The order below covers all 26, including the shared asset reference. Sizes are GitHub's reported KiB and are only a rough sequencing aid, not working-tree or application size.

Only the `banshees` pilot is modified in this PR. Read-only inventories of other repositories are planning work. Finish and review one PR before starting implementation in the next repository. After this pilot PR is ready, stop for the user's review; do not merge or continue automatically.

Source of truth: `danecohn/cohnsoftassets` at `752e894f90f1e58e62ae466352cb03c8bfd7d703`. The explicit new-name brief overrides the source guide's legacy-product-name sentence. Company assets remain unchanged.

| Order | Repository | Proposed identity / scope | Notes | Size KiB |
|---:|---|---|---|---:|
| Reference | `cohnsoftassets` | Cohnsoft brand assets | Read, pin and copy; do not redraw or recolour | 0 |
| 1 | `banshees` | Cohn Banshees | Proposed; scaffold-only pilot | 14 |
| 2 | `AltStackWarehouse` | Cohn Drive | Nextcloud integration; preserve app IDs and storage | 291 |
| 3 | `AltStackSearch` | Cohn Search | Base SearXNG distribution | 340 |
| 4 | `Artemisearch` | Cohn Search | Enhanced edition; coordinate with the base distribution | 305 |
| 5 | `cohnemail` | Cohn family portal | Preserve cohn.email family identity and public links; update publisher credit | 424 |
| 6 | `artemismind` | Cohn Mind | Proposed fallback name | 731 |
| 7 | `artemisprompter` | Cohn Prompter | Proposed fallback name | 809 |
| 8 | `AmerikaEngine` | Cohn Engine | Retain Godot notices and recipe formats | 912 |
| 9 | `AmerikaRender` | Cohn Render | Retain Blender notices and formats | 936 |
| 10 | `amerikaios` | Cohn Social for iOS | Social app; preserve bundle IDs and account endpoints | 1029 |
| 11 | `AmerikaBox` | Cohn Box | Retain BeepBox/lamejs notices and song formats | 1061 |
| 12 | `amerikaandroid` | Cohn Social for Android | Preserve package IDs and account endpoints | 1066 |
| 13 | `AmerikaSprite` | Cohn Sprite | Retain .asprite.json and other file formats | 1180 |
| 14 | `AltStackMail` | Cohn Mail & Calendar | Confirmed by user; retain Tuta notices and identities | 1640 |
| 15 | `F-M-Journal` | Cohn Journal | Brief's proposed name; preserve offline data, sync and MCP contracts | 1677 |
| 16 | `AmerikaVenture` | Cohn Venture | Brief's proposed name; retain Mozilla notices and profiles | 2027 |
| 17 | `AmerikaOffice` | Cohn Office | Brief's proposed name; retain upstream Euro-Office notices and formats | 2463 |
| 18 | `GameProducer` | Cohn Game Producer | Brief's proposed name; keep Director, Sking, Forge, Molder, Palette, Noteie | 2719 |
| 19 | `amerikamacos` | Cohn Social for macOS | Qt Social client, not the OS | 2810 |
| 20 | `AmerikaLinux` | Cohn Social for Linux | Qt Social client, not the OS | 2810 |
| 21 | `AmerikaWindows` | Cohn Social for Windows | Qt Social client, not the OS | 2978 |
| 22 | `lookout` | Cohn Lookout | Confirmed by user; native WebKit browser | 4415 |
| 23 | `MakOS` | Cohn OS | Brief's proposed name; preserve installed package IDs and config paths | 64225 |
| 24 | `amerikasocial` | Cohn Social / Cohnsoft main site | Shared backend, PDS integration and product/download hub; broad final integration review | 148716 |
| 25 | `zephyrrentals` | Zephyr Rentals | Client business identity stays intact; change software publisher credit only | 53154 |

## Naming decisions and items for approval

- User confirmed: mail is **Cohn Mail & Calendar**; the WebKit browser is **Cohn Lookout**.
- Proposed fallback names requiring approval: **Cohn Banshees**, **Cohn Mind**, **Cohn Prompter**.
- The Office, Game Producer, Journal, Venture and OS names were marked tentative in the brief and remain reviewable in their PRs.
- Two search repos map to Cohn Search. Keep both repositories; the source/fork relationship and public download labels must be resolved without silently deprecating either.
- The family portal and Zephyr rental business are not to be renamed as companies. Only their software publisher credit is proposed here; preserve business content and current domains.
- `amerikamacos`, `AmerikaLinux` and `AmerikaWindows` are Social clients according to their READMEs, not operating systems. `MakOS` is the OS repository.

## Design and product artwork

Vendor official Cohnsoft assets and Cohn Sans into each product, with the exact source commit and file hashes. Never hotlink runtime fonts or logos. Shared Cohnsoft assets are immutable. The user permits product-specific app icons and logos created with **Cohn Sprite**, in accordance with the shared brand guide. Keep editable `.asprite.json` sources and export platform icon sets for the actual targets. This permission does not permit modifying the company's canonical logo, wordmark or shared asset files. Avoid applying new marks to upstream third-party notices.

## Deferred domains and PDS migration

The user specified **cohnsoft.com** for the main Cohnsoft site and **cohn.social** for the PDS. Do not attach domains, change DNS, alter production services or secrets, or advertise either domain as operational in these rebrand PRs. The user will deploy approved PRs and connect the domains later.

The Social/PDS PR must include a migration plan before any hostname cutover: inventory the PDS deployment (it may live outside the app repo), account DIDs, handles, DID service endpoints, PLC operations, sessions, OAuth/discovery URLs, blob access and repo hosting. Preserve existing identities and old-host compatibility; do not treat a PDS hostname migration as a text replacement. Propose redirects for human-facing old URLs at deployment time; protocol endpoints may need longer compatibility service rather than redirects alone. Do not rename existing environment variables, API routes or IDs.

## Per-repository review gate

1. Inventory visible names, images, themes, publisher fields and compatibility-sensitive identifiers.
2. Write a short file/risk plan; centralize product identity and vendor the pinned assets.
3. Rebrand visible surfaces; preserve upstream notices, licences and compatibility contracts. Add data migrations only where an actual old user path changes.
4. Run real build and test commands. For desktop apps, build installers and launch the packaged product; strictly verify macOS signatures and state notarization status plainly.
5. Capture actual main screens in light and dark. Attach them to one `rebrand/cohnsoft` PR per repository. Report unavailable platforms or credentials honestly.
6. Do not merge, deploy, force-push, rename/delete repositories or change production secrets. Preserve existing release tags and live links.
