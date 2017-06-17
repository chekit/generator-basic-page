'use strict';

import gulp   from 'gulp';
import pug    from 'gulp-pug';
import debug  from 'gulp-debug';
import notify from 'gulp-notify';

gulp.task('pug', () => {
    return gulp.src(`${config.paths.src}*.pug`)
        .pipe(pug({
           pretty: true
        }))
        .on('error', notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error in Jade Partials"
        }))
        .pipe(gulp.dest(`${config.paths.html}`));
});
