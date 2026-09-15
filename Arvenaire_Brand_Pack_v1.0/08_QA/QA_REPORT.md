# ARVENAIRE Brand Pack v1.0 — QA Report

**Result:** PASS  
**Checks passed:** 47/47  
**Checks failed:** 0

## Verification scope
- SVGs parse as XML and expose a viewBox.
- Master SVG colour variants share identical path geometry.
- 4096px master PNGs are transparent RGBA assets.
- Favicon PNGs match every declared size.
- App icons are 1024×1024.
- Banner dimensions match their filenames.
- Web manifest parses correctly.
- Approved-reference hashes verify.
- No font binaries are bundled.
- Core documentation files are present and non-empty.
- Full package SHA-256 inventory is included in `FILE_CHECKSUMS.sha256`.

## Brand-specific QA decisions
- **Flat vector is the geometry master.**
- **Premium 3D artwork is a presentation master**, not the source for small-size identity.
- At favicon sizes, the full silhouette remains legible; the 16px file was retained rather than inventing a different micro-logo.
- Sapphire is treated as a restrained accent; primary identity still works in one colour.
- Wordmark descriptor is functional (`GLOBAL ENGINEERING PATHWAYS`) and can be omitted without changing the master wordmark.
- The current presentation line (`EXPLORE · TRANSITION · BELONG`) is optional and is not embedded into production master lockups.

## Automated check results
- PASS — **SVG parse: 02_WORDMARK/arvenaire-wordmark-web.svg** — viewBox=0 0 1800 300
- PASS — **SVG parse: 02_WORDMARK/arvenaire-wordmark-light.svg** — viewBox=0 0 1800 300
- PASS — **SVG parse: 03_FAVICON_APP_ICONS/favicon.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 01_MASTER_LOGO/Lockups/arvenaire-horizontal-lockup-light.svg** — viewBox=0 0 1800 460
- PASS — **SVG parse: 01_MASTER_LOGO/Lockups/arvenaire-stacked-lockup-light.svg** — viewBox=0 0 1200 1280
- PASS — **SVG parse: 01_MASTER_LOGO/Lockups/arvenaire-horizontal-lockup-dark.svg** — viewBox=0 0 1800 460
- PASS — **SVG parse: 01_MASTER_LOGO/Lockups/arvenaire-stacked-lockup-dark.svg** — viewBox=0 0 1200 1280
- PASS — **SVG parse: 01_MASTER_LOGO/Vector/arvenaire-master-symbol-sapphire.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 01_MASTER_LOGO/Vector/arvenaire-master-symbol-ivory.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 01_MASTER_LOGO/Vector/arvenaire-master-symbol-black.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 01_MASTER_LOGO/Vector/arvenaire-master-symbol-white.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 01_MASTER_LOGO/Vector/arvenaire-master-symbol-navy.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 06_WEB_READY/assets/favicon.svg** — viewBox=0 0 1254 1254
- PASS — **SVG parse: 06_WEB_READY/assets/arvenaire-symbol.svg** — viewBox=0 0 1254 1254
- PASS — **Master SVG geometry identical across colour variants** — 5 variants, 4 paths
- PASS — **Transparent raster 4096: arvenaire-master-symbol-black-4096.png** — (4096, 4096), RGBA
- PASS — **Transparent raster 4096: arvenaire-master-symbol-ivory-4096.png** — (4096, 4096), RGBA
- PASS — **Transparent raster 4096: arvenaire-master-symbol-navy-4096.png** — (4096, 4096), RGBA
- PASS — **Transparent raster 4096: arvenaire-master-symbol-sapphire-4096.png** — (4096, 4096), RGBA
- PASS — **Transparent raster 4096: arvenaire-master-symbol-white-4096.png** — (4096, 4096), RGBA
- PASS — **Favicon size 16** — (16, 16)
- PASS — **Favicon size 32** — (32, 32)
- PASS — **Favicon size 48** — (48, 48)
- PASS — **Favicon size 64** — (64, 64)
- PASS — **Favicon size 128** — (128, 128)
- PASS — **Favicon size 180** — (180, 180)
- PASS — **Favicon size 192** — (192, 192)
- PASS — **Favicon size 256** — (256, 256)
- PASS — **Favicon size 512** — (512, 512)
- PASS — **ICO generated** — 377 bytes; declared sizes=[(16, 16)]
- PASS — **Web manifest JSON valid** — {'name': 'Arvenaire', 'short_name': 'Arvenaire', 'start_url': '/', 'display': 'standalone', 'background_color': '#05070A', 'theme_color': '#05070A', 'icons': [{'src': '/assets/favicon-192.png', 'sizes': '192x192', 'type': 'image/png'}, {'src': '/assets/favicon-512.png', 'sizes': '512x512', 'type': 'image/png'}]}
- PASS — **No font binaries bundled** — 0 font files
- PASS — **Banner dimensions: arvenaire-banner-master.png** — (1672, 941)
- PASS — **Banner dimensions: arvenaire-website-hero-2560x1024.jpg** — (2560, 1024)
- PASS — **Banner dimensions: arvenaire-social-header-1500x500.jpg** — (1500, 500)
- PASS — **Banner dimensions: arvenaire-minimal-header-1920x480.jpg** — (1920, 480)
- PASS — **App icon dimensions: arvenaire-app-icon-dark-1024.png** — (1024, 1024)
- PASS — **App icon dimensions: arvenaire-app-icon-light-1024.png** — (1024, 1024)
- PASS — **App icon dimensions: arvenaire-app-icon-premium-1024.png** — (1024, 1024)
- PASS — **App icon dimensions: arvenaire-app-icon-sapphire-1024.png** — (1024, 1024)
- PASS — **Approved reference manifest hashes verify** — 11 reference files
- PASS — **Documentation non-empty: 00_START_HERE/ASSET_MAP.md** — 618 bytes
- PASS — **Documentation non-empty: 00_START_HERE/BRAND_SUMMARY.md** — 945 bytes
- PASS — **Documentation non-empty: 00_START_HERE/START_HERE.md** — 919 bytes
- PASS — **Documentation non-empty: 00_START_HERE/USAGE_RULES.md** — 820 bytes
- PASS — **Documentation non-empty: 06_WEB_READY/README_INTEGRATION.md** — 654 bytes
- PASS — **Documentation non-empty: 07_APPROVED_REFERENCE_IMAGES/README.md** — 558 bytes

## Package summary
- Files in unpacked brand pack: **79**
- Top-level sections: **9**
- QA contact sheet: `08_QA/qa-contact-sheet.png`
- Package manifest: `08_QA/PACKAGE_MANIFEST.json`
