# Changelog 

**Repository:** `[repository-name]`  
**Description:** `Tracks all notable changes, version history, and roadmap toward 1.0.0 following Semantic Versioning.`  

All notable changes to this repository will be documented in this file.

This project follows **Semantic Versioning (SemVer)** ([semver.org](https://semver.org/)), using the format:


`[MAJOR].[MINOR].[PATCH]` 
- **MAJOR** (`X.0.0`) – Incompatible API/feature changes that break backward compatibility. 
- **MINOR** (`0.X.0`) – Backward-compatible new features, enhancements, or functionality changes. 
- **PATCH** (`0.0.X`) – Backward-compatible bug fixes, security updates, or minor corrections. 
- **Pre-release versions** – Use suffixes such as `-alpha`, `-beta`, `-rc.1` (e.g., `2.1.0-beta.1`). 
- **Build metadata** – If needed, use `+build` (e.g., `2.1.0+20250314`). 

---

## [Unreleased] 

### Added 
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

### Fixed 
- Placeholder for bug fixes and security updates. 

### Changed 
- Placeholder for changes to existing functionality. 

---

## Future Roadmap to `1.0.0` 

The `0.90.x` series is part of NDTP’s **pre-stable development cycle**, meaning: 
- **Minor versions (`0.91.0`, `0.92.0`...) introduce features and improvements** leading to a stable `1.0.0`. 
- **Patch versions (`0.90.1`, `0.90.2`...) contain only bug fixes and security updates**. 
- **Backward compatibility is NOT guaranteed until `1.0.0`**, though NDTP aims to minimise breaking changes. 

Once `1.0.0` is reached, future versions will follow **strict SemVer rules**. 

---

## Versioning Policy 

1. **MAJOR updates (`X.0.0`)** – Typically introduce breaking changes that require users to modify their code or configurations. 
- **Breaking changes (default rule)**: Any backward-incompatible modifications require a major version bump. 
- **Non-breaking major updates (exceptional cases)**: A major version may also be incremented if the update represents a significant milestone, such as a shift in governance, a long-term stability commitment, or substantial new functionality that redefines the project’s scope. 
2. **MINOR updates (`0.X.0`)** – New functionality that is backward-compatible. 
3. **PATCH updates (`0.0.X`)** – Bug fixes, performance improvements, or security patches. 
4. **Dependency updates** – A **major dependency upgrade** that introduces breaking changes should trigger a **MAJOR** version bump (once at `1.0.0`). 

---

## How to Update This Changelog 

1. When making changes, update this file under the **Unreleased** section. 
2. Before a new release, move changes from **Unreleased** to a new dated section with a version number. 
3. Follow **Semantic Versioning** rules to categorise changes correctly. 
4. If pre-release versions are used, clearly mark them as `-alpha`, `-beta`, or `-rc.X`. 

---

**Maintained by the National Digital Twin Programme (NDTP).** 

© Crown Copyright 2025. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.

Licensed under the NDTP InnerSource Licence – Version 1.0.

For full licensing terms, see [LICENSE.md](LICENSE.md).

