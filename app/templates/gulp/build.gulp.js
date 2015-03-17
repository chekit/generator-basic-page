'use strict';

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	gulpif = require('gulp-if'),
	cache = require('gulp-cache'),
	imagemin = require('gulp-imagemin'),
	pngcrush = require('imagemin-pngcrush'),
	pls = require('gulp-load-plugins')();

//Paths
var paths = {
	jade: ['src/jade/index.jade', 'src/jade/pages/*.jade'],
	sass: 'src/sass/styles.scss',
	html: 'src/*.html',
	images: 'src/images/**/*.{png,jpg,gif,svg}',
	fonts: 'src/sass/base/fonts/**/*',
	js: 'src/js/*.js'
};

//Error Handler
var errorLog = function (error) {
	console.error(error.toString());
	this.emit('end');
};

//Fonts
gulp.task('fonts', function () {
	return gulp.src(paths.fonts)
		.pipe(gulp.dest('src/css/fonts'))
		.pipe(gulp.dest('dist/css/fonts'));
});

//Jade to HTML
gulp.task('jade', function () {
	return gulp.src(paths.jade)
		.pipe(pls.jade({
			pretty: true
		}))
		.on('error', errorLog)
		.pipe(gulp.dest('./src/'))
		.pipe(pls.notify('HTML compile complete!'));
});

//Sass to CSS
gulp.task('sass', ['fonts'], function () {
	return gulp.src(paths.sass)
		.pipe(pls.rubySass())
		.on('error', errorLog)
		.pipe(pls.csscomb())
		.pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', { map: true }))
		.pipe(gulp.dest('src/css'))
		.pipe(pls.notify('Sass compile complete'));
});

//HTML
gulp.task('html', ['wiredep'], function () {
	var assets = pls.useref.assets();

	return gulp.src(paths.html)
		.pipe(assets)
			// Uglify, Concat Libs 
			.pipe( gulpif('*.js', pls.uglify()) )
			//Minify, Optimize CSS
			.pipe( gulpif('*.css', pls.csso()) )
		.pipe(assets.restore())
		.pipe(pls.useref())
		.pipe(gulp.dest('dist'));
});

//Images
gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe(pls.size())
		.pipe(cache(imagemin({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngcrush({ reduce: true })]
		})))
		.pipe(gulp.dest('dist/images'))
		.pipe(pls.size());
});

//JS
gulp.task('js', function() {
	var jsFilter = pls.filter(['src/js/**/*.js', '!src/js/**/_*.js']);

	return gulp.src(paths.js)
		.pipe(pls.jshint())
		.on('error', errorLog)
		.pipe(pls.jshint.reporter('jshint-stylish'))
		.pipe(gulp.dest('src/js'))
		.pipe(jsFilter)
			.pipe(pls.uglify())
		.pipe(jsFilter.restore())
		.pipe(gulp.dest('dist/js'))
		.pipe(pls.notify('JS compile complete!'));
});

gulp.task('build', ['sass', 'jade'], function () {
	gulp.start('html', 'images', 'js');
});
