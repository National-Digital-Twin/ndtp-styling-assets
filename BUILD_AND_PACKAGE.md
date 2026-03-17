# Build and Package

**Repository:** `ndtp-styling-assets`  
**Description:** `Contains details on how to build and package the module`

## To Run the Production Build

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

© Crown Copyright 2025. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.

Licensed under the Open Government Licence v3.0.
For full licensing terms, see [OGL_LICENSE.md](OGL_LICENSE.md).
