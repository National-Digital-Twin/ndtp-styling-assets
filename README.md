# README

**Repository:** `ndtp-styling-assets`  
**Description:** `SCSS module designed to be easily integrated into external projects, such as those built with React, AngularJS, or other front-end frameworks. It provides a consistent set of global NDT styles, mixins, and theme variables, ensuring a streamlined and maintainable design system across multiple applications.`  
**SPDX-License-Identifier:** `Apache-2.0 AND OGL-UK-3.0`  

## Overview

This project is a SCSS module designed to be easily integrated into external projects, such as those built with React, AngularJS, or other front-end frameworks. It provides a consistent set of global styles, mixins, and theme variables, ensuring a streamlined and maintainable design system across multiple applications.

The module follows best practices for modular SCSS architecture, with a well-organized directory structure to support scalability and maintainability. Key features of the module include:

* Global Styles: Reusable base styles, including resets, typography, and form elements, to ensure consistency across various projects.
* Component Styles: Predefined, reusable styles for common UI elements like buttons, cards, and form controls.
* Theming: Centralized theme variables (e.g., color palette, typography settings) to maintain consistent design across projects.
* Flexibility: Ability to customize and extend styles to meet the unique needs of each project.
* Build & Bundling: Configured with Vite and Webpack for efficient building and bundling of SCSS files for both local development and production deployment.

## Prerequisites

- Node
- Git

## Quick Start

To get started, you will need to install the dependencies for the project. This includes all the build tools for compiling SCSS and generating the final CSS.

### 1. Clone the repository:

   ```bash
   git clone https://github.com/National-Digital-Twin/ndtp-styling-assets
   ```

### 2. Install dependencies:

   ```bash
   npm install
   ```

### 3. Run the Development Build

  For development, you can run Webpack in `development` mode:

  ```bash
  npm run dev
  ```

This will build the project and watch for changes in your SCSS files. The output will be available in the `dist` folder.

## Testing Locally

You can also use `npm link` to work with the package directly in development without needing to install a `.tgz` file every time.

1. In your package's directory, run:

   ```bash
   npm link
   ```

2. In your test project, run:

   ```bash
   npm link ndtp-styling-assets
   ```

This will create a symbolic link, so any changes you make to the package will be reflected immediately in your test project.

## Features

- **Core functionality** Provides common styling assets to the demonstrators.

## Currently existing assets

For a list of currently existing assets please see [CURRENT_ASSETS.md](./CURRENT_ASSETS.md)

## Building and packaging

For instructions on how to build and package the solution please see [BUILD_AND_PACHAGE.md](./BUILD_AND_PACKAGE.md)

## External usage

For guidance on how to integrate this package in another node js project please see [EXTERNAL_USAGE.md](./EXTERNAL_USAGE.md)

## Public Funding Acknowledgment

This repository has been developed with public funding as part of the National Digital Twin Programme (NDTP), a UK Government initiative. NDTP, alongside its partners, has invested in this work to advance open, secure, and reusable digital twin technologies for any organisation, whether from the public or private sector, irrespective of size.

## License  
This repository contains both source code and documentation, which are covered by different licenses:  
- **Code:** Originally developed by the National Digital Twin Programme Open-Source Program Office for the National Digital Twin Programme. Licensed under the [Apache License 2.0](./LICENSE.md).  
- **Documentation:** Licensed under the [Open Government Licence v3.0](./OGL_LICENSE.md).  
See `LICENSE.md`, `OGL_LICENSE.md`, and `NOTICE.md` for details.  

## Security and Responsible Disclosure

We take security seriously. If you believe you have found a security vulnerability in this repository, please follow our responsible disclosure process outlined in `SECURITY.md`.

## Software Bill of Materials (SBOM)

Download the [latest SBOM for this codebase](https://github.com/National-Digital-Twin/ndtp-styling-assets/dependency-graph/sbom) to view the current list of components used in this repository.

## Contributing

We welcome contributions that align with the Programme’s objectives. Please read `CONTRIBUTING.md` before submitting pull requests.

## Acknowledgements

For a list of acknowledgments, see `ACKNOWLEDGEMENTS.md`.

## Support and Contact

For questions or support, check Issues or contact the NDTP team on ndtp@businessandtrade.gov.uk.

**Maintained by the National Digital Twin Programme (NDTP).**

© Crown Copyright 2026. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.

Licensed under the Open Government Licence v3.0.
For full licensing terms, see [OGL_LICENSE.md](OGL_LICENSE.md).
