import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import debug from 'gulp-debug';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import tsify from 'tsify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

function buildScripts(addMap = false) {
	const bundler = browserify({
		basedir: '.',
		debug: true,
		entries: [`${pathsSRC.ts}`],
		cache: {},
		packageCache: {}
	});

	bundler
		.plugin(tsify, { target: 'es6' })
		.transform(babelify.configure({ extensions: [".ts", ".js"] }));

	return bundler.bundle()
		.on('error', err => console.error(err))
		.pipe(source('scripts.js'))
		.pipe(buffer())
		.pipe(gulpif(addMap, sourcemaps.init({ loadMaps: true })))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulpif(addMap, sourcemaps.write('./')))
		.pipe(debug({
			title: '* TS ==> Done:'
		}))
		.pipe(gulp.dest(pathsBUILD.js))
}

gulp.task('libs:copy', () => {
	return gulp.src(pathsSRC.libs)
		.pipe(gulp.dest(pathsBUILD.libs));
})

gulp.task('scripts', () => buildScripts());
gulp.task('scripts:dev', () => buildScripts(true));