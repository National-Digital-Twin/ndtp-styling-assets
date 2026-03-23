# External usage

**Repository:** `ndtp-styling-assets`  
**Description:** `Contains guidance on how to utilize this package in other projects`

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

© Crown Copyright 2025. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.

Licensed under the Open Government Licence v3.0.
For full licensing terms, see [OGL_LICENSE.md](OGL_LICENSE.md).
