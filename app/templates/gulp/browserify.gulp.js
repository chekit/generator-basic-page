'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

require('require-dir')('./');

let browserifyTask = function () {
	return browserify({
			entries: './src/js/main.js',
			debug: true
		})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init())
			.pipe(gulp.dest('./src/js/'))
			.pipe(stripDebug());
			.pipe(uglify())
      .pipe(rename({
      	suffix: '.min'
      }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/js/'));
}

gulp.task('browserify', ['debug'], browserifyTask);

module.exports = browserifyTask;
