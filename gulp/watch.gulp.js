'use strict';

import gulp        from 'gulp';
import watch       from 'gulp-watch';
import sequence    from 'gulp-sequence';
import browserSync from 'browser-sync';

let localhost = browserSync.create();

gulp.task('watch', function () {
  	watch(`${config.paths.src}sass/**/*.scss`, function () {
		setTimeout(function () {
			return sequence('sass')(function (err) {
				if (err) console.log(err)
			});
		}, 300);
	});

	watch(`${config.paths.src}**/*.pug`, function () {
		return sequence('pug')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);

	watch(`${config.paths.img_src}`, function (cb) {
		return sequence('images')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);

	watch(`${config.paths.es6}/**/*.js`, function () {
		return sequence('scripts')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);
});

