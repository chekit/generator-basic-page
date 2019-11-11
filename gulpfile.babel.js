'use strict';
import gulp from 'gulp';
import requireDir from 'require-dir';


global.config = require('./project.config.json');
global.pathsSRC = global.config.paths.src;
global.pathsBUILD = global.config.paths.build;

requireDir('./gulp');

gulp.task('default', gulp.series('clean', 'sass', 'pug', 'images', gulp.parallel('libs:copy', 'modernizr')));

gulp.task('dev', gulp.series('default', 'scripts:dev', gulp.parallel('watch', 'server')));
gulp.task('build', gulp.series('default', 'scripts'));