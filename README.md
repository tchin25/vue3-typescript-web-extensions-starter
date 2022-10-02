# Vue 3 Typescript Web Extensions Starter

> *Note: This was created before [vite-plugin-web-extension](vite-plugin-web-extension), which is now definitely the better choice for a generic starter (this project now uses it instead of Webpack). This repo will continue existing as an opinionated starter for myself*

So your boy Thomas over here, while in the middle of building an app, decided to get distracted and build web extensions. And since I'm a heavy Vue user, this boilerplate came out of it.

This is a boilerplate to creating cross-browser web-extensions using Vue 3 and Typescript. It contains an example options page, popup action, background script, content script, and testing script.

It contains:

- Vue 3 and Typescript Support
- Cross-platform supporting using [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- Dev tooling and building using [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)
- Testing with Jest
- Shattered remnants of my hopes and dreams

Inspired by [this video](https://www.youtube.com/watch?v=kYl271X2LNA).

## Development

1. Clone this template
2. Install dependencies with `yarn`
3. `yarn build:watch` to build into `dist`, launch a chromium window with the extension installed, and rebuild on file changes
4. `yarn test` to run unit tests

## Building

1. `yarn build:prod` to build into `dist`
2. Enable dev mode in `chrome://extensions/` and upload your extension
    - If you want to develop for Firefox, you need the [web-ext cli](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
    - Also take a look at the [dynamic browser options](https://vite-plugin-web-extension.aklinker1.io/guide/configuration.html#browser-specific-manifest-fields) in `vite-plugin-web-extension` if you don't want to use `webextension-polyfill`

## Contributing

Not gonna lie, I'm not the brightest bulb in the shed. One time I said that 5 x 22 was 1100. Pull requests are welcomed.