var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', [], function () {
	gulp.start('build');
});