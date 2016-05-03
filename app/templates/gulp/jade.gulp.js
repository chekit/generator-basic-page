'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const wiredep = require('wiredep').stream;

let path = ['./src/jade/*.jade', './src/jade/pages/*.jade', '!./src/jade/_config.jade'];

let jadeTask = function () {
	return gulp.src(path)
		.pipe(jade({
			pretty: true
		}))
		.on('error', errorLog)
		.pipe(gulp.dest('./src/'))
		.pipe(wiredep({
	    	directory: './src/bower_components/',
				exclude: ['bower_components/modernizr/modernizr.js']
	    }))
	   .pipe(gulp.dest('./src/'));
};

gulp.task('jade', jadeTask);

module.exports = jadeTask;
