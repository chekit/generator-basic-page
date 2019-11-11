import gulp, { watch } from 'gulp';

let files = [
	,
	,
	,
	
];

gulp.task('watch', () => {
	watch(`${pathsSRC.base}**/*.scss`, gulp.series('sass'));
	watch(`${pathsSRC.base}**/*.pug`, gulp.series('pug'));
	watch(`${pathsSRC.img}`, gulp.series('images'));
	watch(`${pathsSRC.base}**/*.ts`, gulp.series('scripts:dev'));

	watch(`${pathsBUILD.base}**/*.html`).on('change', gulp.series('reload'));
	watch(`${pathsBUILD.img}**/*.{jpg,png,svg,ico}`).on('change', gulp.series('reload'));
	watch(`${pathsBUILD.js}**/*.js`).on('change', gulp.series('reload'));
});