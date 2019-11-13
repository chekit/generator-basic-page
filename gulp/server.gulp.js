import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('server', () => {
	browserSync.init({
		startPath: `/`,
		server: {
			baseDir: `${pathsBUILD.base}`,
		}
	});
});

//Browser Reload Function
gulp.task('reload', (done) => {
	browserSync.reload();
	done();
});