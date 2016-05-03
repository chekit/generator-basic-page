'use strict';

const = gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
// const debug = require('gulp-debug');

let sassTask = function () {
	return gulp.src('./src/sass/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: [
				'> 1%',
				'last 2 version',
				'safari 5',
				'ie 8',
				'ie 9',
				'opera 12.1',
				'ios 6',
				'android 4'
			],
			cascade: false
		}))
		.pipe(csso())
		.pipe(rename({
				suffix: '.min'
		}))
		.pipe(sourcemaps.write())
		.pipe(debug({
			title: '**SASS** done:'
		}))
		.pipe(gulp.dest('./dist/css/'));
};

gulp.task('sass', sassTask);

module.exports = sassTask;