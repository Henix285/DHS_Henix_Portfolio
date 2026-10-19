---
name: Temporary Python tools
description: Replit-managed Python package installs can add workspace scaffolding and change project configuration.
---

Use the Replit-managed Python package installer cautiously for one-off PDF or image work: it can create root-level uv files, a local Python environment, and change `.replit` modules or Nix packages.

**Why:** A temporary PyMuPDF install for attachment inspection altered the PNPM workspace configuration even though Python is not part of the product.

**How to apply:** Before temporary Python work, note the current `.replit` setup. Afterward, uninstall the added module, remove only generated Python files and caches, restore the original config through the validated replacement flow, then restart the relevant app.
