![](./logo.jpg)

This project is a predefined base structure with all files and configured tasks for creating a web site/page.

# Version 3.0.0

## Technologies

- **[Pug](https://pugjs.org/api/getting-started.html)** (formerly _Jade_) - for creating HTML
- **[Sass](https://sass-scss.ru/)** (_Scss_) - for creating CSS
- **[TypeScript](http://www.typescriptlang.org/index.html)** - for transpaling to plain JavaScript.
- For supporting some rare or out of date features you can configure **Modernizr** (all checks, modules are configures in `modernizr-config.json`)

  > All settings could be found there: https://modernizr.com/download?setclasses

- **[normalize.css](https://github.com/JohnAlbin/normalize-scss)** - project uses fork-version of normalize-css library: https://github.com/JohnAlbin/normalize-scss/tree/main/fork-version

- **[Vite](https://vite.dev/)** - for manage [dev](https://vite.dev/guide/cli.html#dev-server) / [build](https://vite.dev/guide/cli.html#build) / [preview](https://vite.dev/guide/cli.html#vite-preview) tasks

- **[PNPM](https://pnpm.io)** - project uses pnpm as one and only package manager

## TODO

> 3.0.0

- Add feature to add new pug pages and scss files via Terminal
- Convert project to GBP-CLI
