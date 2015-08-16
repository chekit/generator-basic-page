'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['clean', 'clear'], function () {
	gulp.start('fonts', 'css', 'html', 'images', 'scripts');
});

gulp.task('build', ['clean', 'clear'], function () {
	gulp.start('fonts', 'sass', 'jade', 'scripts');
});

gulp.task('server', ['build'], function () {
	gulp.start('browser-sync', 'watch');
});