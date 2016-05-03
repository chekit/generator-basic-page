'use strict';

const gulp = require('gulp');
const size = require('gulp-size');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const pngcrush = require('imagemin-pngcrush');

let imagesTask = function () {
	return gulp.src('./src/images/**/*.{png,jpg,gif,svg,json,xml,ico}')
		.pipe(size())
		.pipe(cache(
			imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngcrush({ reduce: true })]
			})
		))
		.pipe(gulp.dest('./dist/images/'))
		.pipe(size());
};

gulp.task('images', imagesTask);

module.exports = imagesTask;