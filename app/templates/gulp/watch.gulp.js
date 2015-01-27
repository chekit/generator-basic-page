'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*', ['sass']);
	gulp.watch('./src/sass/base/fonts/**/*', ['fonts']);
	gulp.watch('./src/*.html', ['html']);
	gulp.watch('bower.json', ['wiredep']);
	gulp.watch('./src/jade/**/*.jade', ['jade']);
	gulp.watch('./src/js/*.js', ['js']);
	gulp.watch('./src/images/**/*.{png,jpg,gif,svg}', ['images']);
});