# Vue 3 Typescript Web Extensions Starter

So your boy Thomas over here, while in the middle of building an app, decided to get distracted and build web extensions. And since I'm a heavy Vue user, this boilerplate came out of it.

This is a boilerplate to creating cross-browser web-extensions using Vue 3 and Typescript. It contains an example options page, popup action, background script, content script, and testing script.

It contains:

- Vue 3 and Typescript Support
- Cross-platform supporting using [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts)
- Bundling using Laravel Mix
- Testing with Jest
- Shattered remnants of my hopes and dreams

Inspired by [this video](https://www.youtube.com/watch?v=kYl271X2LNA).

## Installation

1. Clone this template
2. Install with `yarn`
3. `npx mix` to build into `dist`
4. Enable dev mode in `chrome://extensions/` and upload your extension
    - If you want to develop for Firefox, you need the [web-ext cli](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)

## Directory Structure

Laravel Mix is rather easy to read, so there isn't really much explaining to do.

- Every Typescript file in the top-level `src/ts` is compiled into the top-level `dist/js`
    - `ui/options.ts` and `ui/popup.ts` are also currently compiled into the top-level `dist/js`
- Scss files in `src/scss` is compiled into their respective css into the top-level `dist/css`
- Files in `src/static` are moved into the top-level `dist`

### Uncompiled

```markdown
src/
├─ scss/
│  ├─ styles.scss
├─ static/
│  ├─ manifest.json
│  ├─ options.html
│  ├─ popup.html
├─ ts/
│  ├─ ui/
│     ├─ components/
│        ├─ OptionsScreen.vue
│        ├─ PopupScreen.vue
│        ├─ example-composition-api.ts
│     ├─ options.ts
│     ├─ popup.ts
│  ├─ background.ts
│  ├─ content-script.ts
```

### Compiled

```markdown
dist/
├─ css/
│  ├─ styles.css
├─ js/
│  ├─ options.js
│  ├─ popup.js
│  ├─ background.js
│  ├─ content-script.js
├─ manifest.json
├─ options.html
├─ popup.html
```

## Contributing

Not gonna lie, I'm not the brightest bulb in the shed. One time I said that 5 x 22 was 1100. Pull requests are welcomed.

## Todo

- [ ]  [Replace feature flag globals during bundling](http://link.vuejs.org/feature-flags). Apparently, this doesn't seem to be possible with Laravel Mix since they [override any user DefinePlugins](https://stackoverflow.com/questions/48906425/laravel-mix-webpack-environment-dependent-variable-for-client-code). If anyone wants to port this to pure Webpack so we can check this off, please feel free.