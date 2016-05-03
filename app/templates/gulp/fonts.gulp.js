'use strict';

const gulp = require('gulp');

let fontsTask = function () {
	return gulp.src('./src/sass/base/fonts/**/*')
		.pipe(gulp.dest('./src/css/fonts'))
		.pipe(gulp.dest('./dist/css/fonts'));
};

gulp.task('fonts', fontsTask);

module.exports = fontsTask;