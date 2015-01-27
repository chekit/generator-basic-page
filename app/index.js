'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('BasicPage') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'install',
      message: 'Would you like to install this generator?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.install = props.install;

      if (this.install) {
        return done();
      }

      this.log('Ok. You say No, so I won\'t install anything. See ya!');

      return false;
    }.bind(this));
  },

  writing: {
    app: function () {
      this.mkdir('src/images');
        this.mkdir('src/images/favicon');
      //==Copy Gulp files
      this.fs.copy(
        this.templatePath('gulp/**/*'),
        this.destinationPath('gulp/')
      );
      //==Copy SRC files
      this.fs.copy(
        this.templatePath('src/**/*'),
        this.destinationPath('src/')
      );

      //Projects .root files
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },

    projectfiles: function () {
      //Bower settings
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      ); 
           
      //Gitignore
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      //JSHint file
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );

      //CSScomb zen-css basic editing
      this.fs.copy(
        this.templatePath('ccscomb.json'),
        this.destinationPath('.ccscomb.json')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
