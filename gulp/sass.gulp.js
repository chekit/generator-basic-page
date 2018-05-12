'use strict';

import gulp         from 'gulp';
import sass         from 'gulp-sass';
import csso         from 'gulp-csso';
import debug        from 'gulp-debug';
import rename       from "gulp-rename";
import notify       from 'gulp-notify';
import sourcemaps   from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', () => {
	return gulp.src(`${config.paths.sass}styles.scss`)
		.pipe(sourcemaps.init())
		.pipe(
			sass().on('error', notify.onError({
				message: "Error: <%= error.message %>",
				title: "Error in Sass"
			}))
		)
		.pipe(autoprefixer({
			browsers: [
				'> 1%',
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
		.pipe(csso())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write())
		.pipe(debug({
			title: '* SASS ==> Done:'
		}))
		.pipe(gulp.dest(config.paths.css));
});