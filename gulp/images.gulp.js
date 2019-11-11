import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';

gulp.task('images', () => {
	return gulp.src(pathsSRC.img)
		.pipe(cache(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest(pathsBUILD.img));
})