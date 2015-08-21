'use strict';

var gulp = require('gulp'),
	del = require('del'),
	wiredep = require('wiredep').stream,
	pngcrush = require('imagemin-pngcrush'),
	$ = require('gulp-load-plugins')({
		rename: {
			'gulp-ruby-sass': 'sass',
			'gulp-autoprefixer': 'prefixer',
			'gulp-html-replace': 'htmlreplace'
		}
	});

//Paths
var paths = {
	jade: ['./src/jade/*.jade', './src/jade/pages/*.jade', '!./src/jade/_config.jade'],
	sass: './src/sass/styles.scss',
	html: './src/*.html',
	images: './src/images/**/*.{png,jpg,gif,svg,json,xml,ico}',
	fonts: './src/sass/base/fonts/**/*',
	js: ['src/js/*.js', '!src/js/_*.js']
};

//Clean Dirs
gulp.task('clean', function (done) {
	del(['./src/css', './src/pages', './src/*.html', './dist'], done);
});

//Clear Cache
gulp.task('clear', function (done) {
	return $.cache.clearAll(done);
});

//Error Handler
var errorLog = function (error) {
	console.error(error.toString());
	this.emit('end');
};

//Fonts
gulp.task('fonts', function () {
	return gulp.src(paths.fonts)
		.pipe(gulp.dest('./src/css/fonts'))
		.pipe(gulp.dest('./dist/css/fonts'))
		.pipe($.notify({
			title: 'Fonts',
			message: 'Fonts Copied!'
		}));
});

//Jade to HTML
gulp.task('jade', function () {
	return gulp.src(paths.jade)
		.pipe($.jade({
			pretty: true
		}))
		.on('error', errorLog)
		.pipe(gulp.dest('./src/'))
		.pipe(wiredep({
	    	directory: './src/bower_components/',
			exclude: ['bower_components/modernizr/modernizr.js']
	    }))
	   .pipe(gulp.dest('./src/'))
		.pipe($.notify({
			title: 'Jade',
			message: 'Jade compile complete!'
		}));
});

//Compile Sass to CSS
gulp.task('sass', function () {
	return $.sass(paths.sass, {
			sourcemap: true,
			style: 'expanded'
		})
		.on('error', errorLog)
		.pipe($.csscomb())
		.pipe($.prefixer({
            browsers: [
            	'last 2 version',
            	'safari 5',
            	'ie 8',
            	'ie 9',
            	'opera 12.1',
            	'ios 6',
            	'android 4'
            ],
            cascade: false
		}))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./src/css/'))
		.pipe($.notify({
			title: 'Sass',
			message: 'Sass compile complete'
		}));
});

//Copy CSS from SRC directory to DIST
gulp.task('css', ['sass'], function () {
	return gulp.src('./src/css/*.css')
		.pipe($.sourcemaps.init())
	        .pipe($.csso())
	        .pipe($.rename({
	        	suffix: '.min'
	        }))
	    .pipe($.sourcemaps.write('.'))
	    .pipe(gulp.dest('./dist/css/'));
});

//Copy HTML from SRC to DIST
gulp.task('html', ['jade'], function () {
	var assets = $.useref.assets();

	return gulp.src(paths.html)
		.pipe($.humans({
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
	    .pipe($.htmlreplace({
	        'css': 'styles.min.css',
	        'js': 'js/app.min.js'
	    }))
		.pipe(assets)
			// Uglify, Concat Libs 
			.pipe( $.if('*.js', $.uglify()) )
		.pipe(assets.restore())
		.pipe($.useref())
		.pipe(gulp.dest('./dist/'));
});

//Copy Images from SRC to DIST
gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe($.size())
		.pipe($.cache(
			$.imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngcrush({ reduce: true })]
			})
		))
		.pipe(gulp.dest('./dist/images/'))
		.pipe($.size())
		.pipe($.notify({
			title: 'Images',
			message: 'Images compile complete!'
		}));
});

//JS
gulp.task('scripts', function() {
	return gulp.src(paths.js)
		.pipe($.sourcemaps.init())
		.pipe($.jshint())
		.on('error', errorLog)
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.stripDebug())
		.pipe($.uglify())
        .pipe($.rename({
        	suffix: '.min'
        }))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/js/'))
		.pipe($.notify({
			title: 'JS',
			message: 'JS compile complete!'
		}));
});
