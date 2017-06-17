'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

const localhost = browserSync.create();

let files = [
	`${config.paths.build}css/**/*.css`,
	`${config.paths.build}images/**/*.{jpg,png,svg,json}`,
	`${config.paths.build}**/*.html`,
	`${config.paths.build}js/**/*.js`
];

gulp.task('server', () => {
	localhost.init({
		startPath: `/`,
		server: {
			baseDir: `${config.paths.build}`
		},
		files: files
	});
})