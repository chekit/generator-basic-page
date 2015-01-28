'use strict';

var gulp = require('gulp'),
	wiredep = require('wiredep').stream;

// inject bower components
gulp.task('wiredep', function () {
  return gulp.src('src/*.html')
    .pipe(wiredep({
    	directory: 'src/bower_components',
		exclude: ['src/bower_components/modernizr/modernizr.js']
    }))
    .pipe(gulp.dest('src'));
});