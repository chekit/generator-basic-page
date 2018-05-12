'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';
import requireDir from 'require-dir';

global.config = require('./project.config.json');

requireDir('./gulp');

gulp.task('default', sequence(['clean', 'clear'], 'sass', 'pug', 'images', 'libs:copy', 'scripts', 'modernizr'));

gulp.task('dev', sequence('default', 'server', 'watch'));
