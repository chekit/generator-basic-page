'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync');

var files = [
	'./src/sass/**/*',
	'./src/sass/base/fonts/**/*',
	'./src/*.html',
	'./bower.json',
	'./src/jade/**/*.jade',
	'./src/js/*.js',
	'./src/images/**/*.{png,jpg,gif,svg}'
];

gulp.task('browser-sync', function () {
	browserSync({
		startPath: 'index.html',
        server: {
            baseDir: ['src']
        },
        files: files
    });
});

gulp.task('server', ['build', 'watch'], function () {
	gulp.start('browser-sync');
});