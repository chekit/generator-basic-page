import child_process from 'child_process';
import gulp from 'gulp';

const exec = child_process.exec;

// Build terminal script: modernizr -c modernizr-config.json -d modernizr/js/
gulp.task('modernizr', function (cb) {
	exec(`modernizr -c modernizr-config.json -u -d ${pathsBUILD.libs}`, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});