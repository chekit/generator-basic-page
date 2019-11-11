import del from 'del';
import gulp from 'gulp';
import cache from 'gulp-cache';

gulp.task('del', () => del([`${pathsBUILD.base}`]));
gulp.task('clear', done => cache.clearAll(done));

gulp.task('clean', gulp.series('del', 'clear'));