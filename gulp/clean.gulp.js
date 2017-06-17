'use strict';

import gulp  from 'gulp';
import del   from 'del';
import cache from 'gulp-cache';

//Clean Dir
gulp.task('clean', () => del([`${config.paths.build}`]));

//Clear Cache
gulp.task('clear', done => cache.clearAll(done));