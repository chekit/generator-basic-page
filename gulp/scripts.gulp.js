'use strict';

import gulp from 'gulp';

import ts from 'gulp-typescript';
import tsify from 'tsify';

import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

import uglify from 'gulp-uglify';
import rename from "gulp-rename";

import debug from 'gulp-debug';

gulp.task('libs:copy', () => {
	return gulp.src(config.paths.libs)
		.pipe(gulp.dest(config.paths.scripts));
})

gulp.task('scripts', () => {
	const bundler = browserify({
		basedir: '.',
		debug: true,
		entries: [`${config.paths.ts}/index.ts`],
		cache: {},
		packageCache: {}
	});

	bundler
		.plugin(tsify, { target: 'es6' })
		.transform(babelify.configure({ extensions: [".ts", ".js"] }));

	return bundler.bundle()
		.on('error', err => console.error(err))
		.pipe(source('scripts.js'))
		.pipe(buffer())
		// .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		// .pipe(sourcemaps.write('./'))
		.pipe(debug({
			title: '* TS ==> Done:'
		}))
		.pipe(gulp.dest(config.paths.scripts));
});