'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*', ['sass', browserSync.reload]);
	gulp.watch('./src/sass/base/fonts/**/*', ['fonts', browserSync.reload]);
	gulp.watch('./src/*.html', ['html', browserSync.reload]);
	gulp.watch('bower.json', ['wiredep', browserSync.reload]);
	gulp.watch('./src/jade/**/*.jade', ['jade', browserSync.reload]);
	gulp.watch('./src/js/*.js', ['js', browserSync.reload]);
	gulp.watch('./src/images/**/*.{png,jpg,gif,svg}', ['images', browserSync.reload]);
});