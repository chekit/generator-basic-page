import browserSync from 'browser-sync';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import debug from 'gulp-debug';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('sass', () => {
	return gulp.src(`${pathsSRC.sass}`)
		.pipe(sourcemaps.init())
		.pipe(
			sass().on('error', notify.onError({
				title: "Error in Sass",
				message: "Error: <%= error.message %>",
			}))
		)
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(csso())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write())
		.pipe(debug({
			title: '* SASS ==> Done:'
		}))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(gulp.dest(pathsBUILD.css));
});