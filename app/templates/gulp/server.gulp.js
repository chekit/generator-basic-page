'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync');

var files = [
	'./src/*.html',
	'./src/pages/*.html',
	'./src/css/*.css',
	'./src/js/*.js'
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
