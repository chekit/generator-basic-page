'use strict';

import gulp  from 'gulp';

gulp.task('images', () => {
	return gulp.src(`${config.paths.img_src}`)
		.pipe(gulp.dest(`${config.paths.img_dist}`));
})