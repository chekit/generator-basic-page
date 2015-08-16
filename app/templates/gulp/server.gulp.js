'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

var files = [
	'./src/*.html',
	'./src/pages/*.html',
	'./src/css/**/*.css',
	'./src/js/**/*.js'
];

gulp.task('browser-sync', function () {
	browserSync.init({
		startPath: '/',
        server: {
            baseDir: ['./src/']
        },
        files: files
    });
});