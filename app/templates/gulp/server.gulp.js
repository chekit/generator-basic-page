'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

let files = [
	'./src/*.html',
	'./src/pages/*.html',
	'./src/css/**/*.css',
	'./src/js/**/*.js'
];

let syncTask = function () {
	browserSync.init({
		startPath: '/',
        server: {
            baseDir: ['./src/']
        },
        files: files
    });
};

gulp.task('browser-sync', syncTask);

module.exports = syncTask;