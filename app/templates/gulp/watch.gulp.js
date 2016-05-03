'use strict';

const gulp = require('gulp');
const	watch = require('gulp-watch');

let watchTask = function () {
	watch('src/sass/**/*.scss', () => require('./sass.gulp')());
	watch('src/jade/**/*.jade', () => require('./jade.gulp')());
	watch('src/js/**/*.js', () => require('./browserify.gulp')());
	watch('bower.json', () => require('./wiredep.gulp')());
	watch('./src/images/**/*', () => require('./images.gulp')());
	watch('./src/sass/base/fonts/**/*', () => require('./fonts.gulp')());
};

gulp.task('watch', watchTask);

module.exports = watchTask;