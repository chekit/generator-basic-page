'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');

let path = ['src/js/modules/*.js', '!src/js/modules/_*.js'];

let debugTask = function () {
	return gulp.src(paths)
		.pipe(jshint())
		.on('error', errorLog)
		.pipe(jshint.reporter('jshint-stylish'));
	};

gulp.task('debug', debugTask);

module.exports = debugTask;