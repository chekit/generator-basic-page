'use strict';

import gulp       from 'gulp'
import babelify   from 'babelify';
import browserify from 'browserify';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';
import uglify     from 'gulp-uglify';
import rename     from "gulp-rename";
import eslint     from 'gulp-eslint';

gulp.task('lint', () => {
	return gulp.src(['./src/js/**/*.js', '!./src/js/libs/**/*.*'])
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('libs', () => {
	return gulp.src(`${config.paths.es6}libs/`)
		.pipe(gulp.dest(`${config.paths.es5}`));
})

gulp.task('scripts', ['lint'], () => {
		const bundler = browserify(`${config.paths.es6}index.js`);
		bundler.transform(babelify);

		bundler.bundle()
			.on('error', err => console.error(err))
			.pipe(source('scripts.js'))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(`${config.paths.es5}`));
});