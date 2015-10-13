'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['clean', 'clear'], function () {
	gulp.start('fonts', 'css', 'html', 'images', 'browserify', 'libs');
});

gulp.task('build', ['clean', 'clear'], function () {
	gulp.start('fonts', 'sass', 'jade', 'browserify');
});

gulp.task('server', ['build'], function () {
	gulp.start('browser-sync', 'watch');
});
