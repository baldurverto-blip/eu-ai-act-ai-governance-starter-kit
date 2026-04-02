# Remotion Mockup Assets

This folder is intentionally isolated from the rest of the product workspace.

## Environment verification

- `node` is available locally.
- `npm` is available locally.
- `pnpm` is not installed.
- Remotion is not installed in this workspace.
- Network access to `registry.npmjs.org` is blocked in this environment, so Remotion cannot be installed cleanly here right now.

## What this setup does

The structure mirrors a simple composition-driven render pipeline so it can be moved into Remotion later, but it does not depend on external packages today.

- `src/scene.mjs` defines the mockup scene and reusable pack metadata.
- `scripts/render-preview.mjs` renders a polished SVG preview.
- `scripts/render-preview-png.py` renders a matching PNG using local Pillow and system fonts.
- Render output goes to `renders/`.

## Usage

```bash
npm run render:preview
```

## Notes

If network access becomes available later, this folder is the right place to add Remotion proper without affecting the main landing page files.
