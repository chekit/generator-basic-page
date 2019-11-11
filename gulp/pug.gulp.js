import gulp from 'gulp';
import notify from 'gulp-notify';
import pug from 'gulp-pug';

gulp.task('pug', () => {
    return gulp.src(`${pathsSRC.pug}`)
        .pipe(pug({
            pretty: true
        }))
        .on('error', notify.onError({
            title: "Error in Jade Partials",
            message: "Error: <%= error.message %>",
        }))
        .pipe(gulp.dest(`${pathsBUILD.html}`));
});
