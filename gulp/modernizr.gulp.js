'use strict';

import gulp 				from 'gulp';
import child_process from 'child_process';

const exec = child_process.exec;

//modernizr -c modernizr-config.json -d modernizr/js/
gulp.task('modernizr', function (cb) {
	exec('modernizr -c modernizr-config.json -u -d ./dist/js/libs/', function (err, stdout, stderr) {
		console.log(stdout);
    console.log(stderr);
    cb(err);
	});
});