'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['clean', 'clear'], function () {
	require('./gulp/fonts.gulp')();
	require('./gulp/images.gulp')();
	require('./gulp/browserify.gulp')();
	require('./gulp/html.gulp')();
	require('./gulp/sass.gulp')();
});

gulp.task('build', ['clean', 'clear'], function () {
	require('./gulp/fonts.gulp')();
	require('./gulp/jade.gulp')();
	require('./gulp/browserify.gulp')();
	require('./gulp/sass.gulp')();
});

gulp.task('server', ['build'], function () {
	require('./gulp/server.gulp')();
	require('./gulp/watch.gulp')();
});
