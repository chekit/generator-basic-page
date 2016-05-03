'use strict';

const gulp = require('gulp');
const useref = require('gulp-useref');
const humans = require('gulp-humans');
const htmlReplace = require('gulp-html-replace');
const uglify = require('gulp-uglify');

require('require-dir')('./');

let htmlTask = function () {
	let assets = useref.assets();

	return gulp.src('./src/*.html')
		.pipe(humans({
			out: './dist/humans.txt',
			team: {
		        'Anton Cherepov': {
		            'Email': 'chekitdnb@gmail.com',
		            'Country': 'Russian Federation',
		            'Personal': 'http://acherepov.ru',
		            'GitHub': 'https://github.com/chekit/'
		        }
			},
		    site: {
		        'Standards': 'HTML5, CSS3',
		        'Components': 'jQuery, Modernizr',
		        'Software': 'SublimeText 3'
		    },
		    note: 'Built with love by Anthony Cherepov.'
		}))
	    .pipe(htmlReplace({
	        'css': 'css/styles.min.css',
	        'js': 'js/app.min.js'
	    }))
		.pipe(assets)
			// Uglify, Concat Libs 
			.pipe( $.if('*.js', uglify()) )
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('./dist/'));
};

gulp.task('html', ['jade'], htmlTask);

module.exports = htmlTask;