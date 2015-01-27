'use strict';

var gulp = require('gulp'),
	cache = require('gulp-cache'),
	del = require('del');

//Clean Dirs
gulp.task('clean', function (done) {
	del(['src/css', 'dist'], done);
});

//Clear Cache
gulp.task('clear', function (done) {
	return cache.clearAll(done);
});

gulp.task('default', ['clean', 'clear'], function () {
	gulp.start('build');
});