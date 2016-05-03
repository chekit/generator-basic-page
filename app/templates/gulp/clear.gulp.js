'use strict';

const gulp = require('gulp');
const cache = require('gulp-cache');
const del = require('del');

//Clean Dirs
gulp.task('clean', function (done) {
	del(['./src/css', './src/pages', './src/*.html', './dist'], done);
});

//Clear Cache
gulp.task('clear', function (done) {
	return cache.clearAll(done);
});