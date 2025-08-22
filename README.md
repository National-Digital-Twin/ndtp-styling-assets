# README

**Repository:** `ndtp-styling-assets`  
**Description:** `SCSS module designed to be easily integrated into external projects, such as those built with React, AngularJS, or other front-end frameworks. It provides a consistent set of global NDT styles, mixins, and theme variables, ensuring a streamlined and maintainable design system across multiple applications.`  
**Repository Status:** `Private – NDTP InnerSource`  

---

## Overview

This repository is part of the **National Digital Twin Programme (NDTP)**. It supports the development of secure, modular, and standards-based components for internal use across NDTP projects.

> **This repository is private and governed by the NDTP InnerSource Licence – Version 1.0.**  
> It is intended solely for collaboration among NDTP teams and authorised suppliers.  
> It is **not open source** and must not be disclosed, redistributed, or published externally.

--- 

## Description

This project is a SCSS module designed to be easily integrated into external projects, such as those built with React, AngularJS, or other front-end frameworks. It provides a consistent set of global styles, mixins, and theme variables, ensuring a streamlined and maintainable design system across multiple applications.

The module follows best practices for modular SCSS architecture, with a well-organized directory structure to support scalability and maintainability. Key features of the module include:

* Global Styles: Reusable base styles, including resets, typography, and form elements, to ensure consistency across various projects.
* Component Styles: Predefined, reusable styles for common UI elements like buttons, cards, and form controls.
* Theming: Centralized theme variables (e.g., color palette, typography settings) to maintain consistent design across projects.
* Flexibility: Ability to customize and extend styles to meet the unique needs of each project.
* Build & Bundling: Configured with Vite and Webpack for efficient building and bundling of SCSS files for both local development and production deployment.

This document includes clear setup instructions for local and production environments, contributing guidelines, and templates for pull requests and issue handling.

By using this SCSS module, developers can easily integrate a consistent set of design elements into their projects, saving time and ensuring a cohesive look and feel across their web applications.


## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building the Package](#building-the-package)
- [Publishing the Package Locally](#publishing-the-package-locally)
- [Testing Locally](#testing-locally)
- [Publishing the Package to Production](#publishing-the-package-to-production)
- [Usage](#usage)
- [Security](#security)

## Installation

To get started, you will need to install the dependencies for the project. This includes all the build tools for compiling SCSS and generating the final CSS.

1. Clone the repository:
   ```bash
   git clone https://github.com/National-Digital-Twin/ndtp-styling-assets
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

In development, you can compile SCSS into CSS and run the build process using Webpack.

### Running Development Build

For development, you can run Webpack in `development` mode:

```bash
npm run dev
```

This will build the project and watch for changes in your SCSS files. The output will be available in the `dist` folder.

### Running Production Build

For production, Webpack will optimize the output (minify the CSS and JS) and place it in the `dist` folder:

```bash
npm run build
```

The final compiled CSS (`styles.css`) will be ready to be used or published.

## Building the Package

To build the package locally, you need to ensure that the package is ready for distribution.

1. Compile the SCSS files into the final CSS file. You can do this by running:

   ```bash
   npm run build
   ```

2. Once the package is built, your `dist` folder will contain:
   - `dist/css/styles.css` (compiled CSS)
   - `dist/scss/main.scss` (SCSS main source file)

3. Optionally, you can check the contents of the `dist` folder to verify everything is in place.

## Publishing the Package Locally

To test your package locally before publishing it to a public registry, follow these steps:

### 1. Generate a `.tgz` File

Use the following command to package your project into a `.tgz` file (tarball). This file can be used to install the package in other local projects.

```bash
npm pack
```

This will generate a `.tgz` file (e.g., `ndtp-styling-assets-1.0.0.tgz`) in your project folder.

### 2. Install the Local Package

Once you have the `.tgz` file, you can install it locally in another project:

```bash
npm install /path/to/ndtp-styling-assets-1.0.0.tgz
```

Replace `/path/to/ndtp-styling-assets-1.0.0.tgz` with the actual path to the generated `.tgz` file.

### 3. Testing the Local Package

After installing, you can import the CSS or SCSS into your project:

- **Using CSS:**
  ```html
  <link rel="stylesheet" href="node_modules/ndtp-styling-assets/dist/css/styles.css">
  ```

- **Using SCSS:**
  ```scss
  @use 'node_modules/ndtp-styling-assets/dist/scss/main.scss' as ndtp;
  ```

Now you can test the changes and confirm that your package works as expected.

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

---
## Publishing the Package to Production

Once you're ready to publish your package to a public or private GitHub repository, follow these steps:

### 1. Set the Version in `package.json`

Before publishing, ensure the version number in your `package.json` is updated to reflect the current version. Use **semantic versioning** (e.g., `0.0.1`, `1.0.1` or `2.0.0`).

```json
{
  "name": "ndtp-styling-assets",
  "version": "0.0.1",
  "main": "dist/css/styles.css",
  "style": "dist/scss/main.scss",
  "files": [
    "dist/css/styles.css",
    "dist/scss/**/*.scss"
  ],
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  }
}
```

### 2. Authenticate with GitHub Packages

Ensure that you are authenticated with GitHub Packages. You will need a GitHub token with `write:packages` scope to publish packages.

You can log in using the following command:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@yourusername
```

Replace `yourusername` with your actual GitHub username.

### 3. Publish the Package to GitHub Packages

Publish your package to GitHub Packages using the following command:

```bash
npm publish --registry=https://npm.pkg.github.com
```

This will upload your package to GitHub Packages, where others can install it from your GitHub repository.

### 4. Install the Published Package in Other Projects

Once the package is published, you can install it in any project via npm by specifying your GitHub repository:

```bash
npm install @yourusername/ndtp-styling-assets
```

Make sure to replace `yourusername` with your actual GitHub username. If your package is private, ensure the project is configured with the necessary GitHub authentication (e.g., using a GitHub token).

To configure the authentication, you will need to update the `.npmrc` file like this:

```bash
//.npmrc configuration example

// registry=https://npm.pkg.github.com/
// //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

---

## Usage

To use this ndtp-styling-assets package in your project, follow these steps:

### 1. Import the CSS

You can directly use the compiled CSS file:

```html
<link rel="stylesheet" href="node_modules/ndtp-styling-assets/dist/css/styles.css">
```

This will apply the shared styles (buttons, colors, etc.) across your HTML pages.

### 2. Import the SCSS

Alternatively, you can import the SCSS file for more customization. **We recommend using `@use`** instead of `@import`, as `@import` is deprecated in Sass. The `@use` rule is more efficient and allows you to load stylesheets and control their namespace.

```scss
@use 'node_modules/ndtp-styling-assets/dist/scss/main.scss';
```

### 3. Using Namespaces with `@use`

When you use `@use`, all variables, mixins, and functions from the imported SCSS file are scoped to a **namespace** (by default, the namespace is the name of the file). This avoids naming conflicts and keeps your code organized.

For example, after using `@use`, you can access the styles or variables from the shared package like this:

```scss
.button {
  background-color: ndtp.$primary-color; /* Use the $primary-color variable from ndtp.scss */
}
```

In this example, `ndtp` is the namespace created by `@use`, and `$primary-color` is a variable from the `main.scss` file of the shared package.

### 4. Customize the SCSS

If you import the SCSS into your project, you can override or extend the styles as per your requirements. For instance, you can change the primary color by modifying the `$primary-color` variable **before** the `@use` statement:

```scss
$primary-color: #ff5733; /* Custom color */
@use 'node_modules/ndtp-styling-assets/dist/scss/main.scss';
```

This allows you to apply your custom styling while still leveraging the prebuilt styles from the shared package.

### 5. Using Vite with SCSS

If you're using Vite in your project, you can configure Vite to resolve the SCSS imports from the package folder more easily by adding the following to the `vite.config.js`:

```js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@shared-components': '/node_modules/ndtp-styling-assets/dist/scss'
    }
  }
});
```

Then, you can import the SCSS like this in your styles:

```scss
@use '@shared-components/main.scss';
```

This makes it easier to work with SCSS from the shared package without having to provide the full path each time.

---

## Currently existing assets

For a list of currently existing assets please see [CURRENT_ASSETS.md](./CURRENT_ASSETS.md)

## Public Funding Acknowledgment  
This repository has been developed with public funding as part of the National Digital Twin Programme (NDTP), a UK Government initiative. NDTP, alongside its partners, has invested in this work to advance open, secure, and reusable digital twin technologies for any organisation, whether from the public or private sector, irrespective of size.  

## Licensing

This repository, including all source code, documentation, configuration files, and related materials, is licensed under the:

**NDTP InnerSource Licence – Version 1.0**  
See [LICENSE.md](LICENSE.md) for the full licence text.

> ⚠️ This repository is **not open source**.  
> Redistribution, disclosure, or publication of any part of this repository is prohibited without the **explicit, written approval** of the NDTP Management Team.

All intellectual property rights are held by the **Department for Business and Trade (UK)** as the governing entity for the National Digital Twin Programme (NDTP).

## Security and Responsible Disclosure  
We take security seriously. If you believe you have found a security vulnerability in this repository, please follow our responsible disclosure process outlined in `SECURITY.md`.  

## Software Bill of Materials (SBOM)

This project provides a Software Bill of Materials (SBOM) to help users and integrators understand its dependencies.

### Current SBOM
Download the [latest SBOM for this codebase](../../dependency-graph/sbom) to view the current list of components used in this repository.

## Contributing  
We welcome contributions that align with the Programme’s objectives. Please read our `CONTRIBUTING.md` guidelines before submitting pull requests.  

## Acknowledgements  
This repository has benefited from collaboration with various organisations. For a list of acknowledgments, see `ACKNOWLEDGEMENTS.md`.  

## Support and Contact  
For questions or support, check our Issues or contact the NDTP team on ndtp@businessandtrade.gov.uk.

**Maintained by the National Digital Twin Programme (NDTP).**  

© Crown Copyright 2025. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.