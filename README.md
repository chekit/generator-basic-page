# Yeroman Basic Page Generator (`generator-basic-page`)
## Getting Started with Basic Page Generator
To simply install this generator in your enviroment just follow the steps:

1. Clone repository to local project folder (your enviroment, i.e. `basic-page-genrator`)
2. From the project directory, simply run `npm link`(*that will install your project dependencies and symlink a global module to your local file*)
3. Now you can just create a new folder for your own project and inside it run `yo basic-page`
4. That's all. Now you can work on your project with all dependecies and gulp tasks configured

> Don't forget to make changes inside *gulp.build.js* in `html` task which generates `humans.txt`

##Possible Issues

Sometimes there is issue with installation of:

1. *gulp-autoprefixer*, so you need to install it manually `npm install -D gulp-autoprefixer`
2. *gulp-size*, so you need to install it manually `npm install -D gulp-size`

###'Allo! 'Allo!
> For that generator you need to update your *npm* up to **2.3.0** or above because the 1.4.0 version causes issues with gulp-imagemin (for more info: [Upgrading npm on Windows])

## Getting Started with Yeoman

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://yeoman.io/static/yeoman-02.61952591a7.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm] package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install **generator-basic-page** from *npm*, run:

```bash
npm install -g generator-basic-page
```

Finally, initiate the generator:

```bash
yo basic-page
```

### Basic-page generator commands

> To build project you need to write in concole

```bash
gulp
```

> To build project and run browserSync for developing you need to write in concole

```bash
gulp server
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Gulp] and [Bower], check out the complete [Getting Started Guide].


## License

MIT

####TODO
- C помощью команды `yo <command>` создавать страницу *.jade в папке `jade/pages`
- Сделать jQuery необязательным (реализовать запрос на установку)

___

[Upgrading npm on Windows]: https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows
[Yeoman]: http://yeoman.io
[npm]: https://npmjs.org
[Gulp]: http://gulpjs.com/
[Bower]: http://bower.io
[Getting Started Guide]: https://github.com/yeoman/yeoman/wiki/Getting-Started
