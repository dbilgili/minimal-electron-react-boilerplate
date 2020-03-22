## Minimal Electron & React Boilerplate

- Transpiling
- JS and Style linting
- CSS modules support
- Sass compiler
- SVG loader
- URL Loader for files

`npm run client` to run the _renderer process_ and then `npm run server` to run the _main process_.

`npm run build` to build for production and `npm run dist` to distribute the executables.

> Don't forget to change `.icns` files under `/build` and other app related parameters in the `package.json`, such as `productName`, `version`, `author` etc.

Note that `npm run dist` builds from production. So, always make sure to run `npm run build` first. Or alternatively you can create another script to run them in order.
