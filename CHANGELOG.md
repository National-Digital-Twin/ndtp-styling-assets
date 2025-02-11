# Changelog

All notable changes to this project will be documented in this file, following **Semantic Versioning**.

---

## [0.0.1] - 2025-02-11

**Ticket**: ndtp-styling-assets - Initial project setup [[DPAV-339]](https://ndtp.atlassian.net/browse/DPAV-339)

### New features
- **Initial release** of the SCSS module with the following setup:
  - Reorganized the SCSS directory structure for scalability and modularity.
  - Migrated **color variables** from the external system (LISA) for testing purposes and consistency across projects. This migration may be further refined in future updates.
  - Set up core SCSS files:
    - **_base.scss**: Global reset styles and basic settings.
    - **_components.scss**: Reusable component styles (e.g., buttons, cards).
    - **_layout.scss**: Grid systems, flexbox layout styles, and container definitions.
    - **_mixins.scss**: SCSS mixins for reusable styles (borders, typography, etc.).
    - **_theme.scss**: Theme variables, including color palette and typography.
  - Configured **Vite** and **Webpack** for building and bundling the SCSS module (to be finalized after tech discussion).
  - Added the ability to export the **CSS** and **SCSS module** for use in external projects.
  - Created a **README.md** with instructions for:
    - Local and production setup.
    - Guidelines for contributing.
    - Pull request template.
    - Issue handling process.
    - MIT License for contributions.

### Deprecated features
- No deprecated features in this release.

### Fixes
- No fixes in this release.

---

