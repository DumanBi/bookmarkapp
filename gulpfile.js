'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    tasks = { },
    modules = [ 'build', 'less', 'vendors', 'index'];

modules.forEach(function (task) {
    tasks[task] = require('./gulp_tasks/' + task + '.js')(gulp);
});

gulp.task('watch', [ 'index' ], function () {
    livereload.listen();
    gulp.watch([ 'app/**/*.html', 'app/**/*.js', ], ['build']);
    gulp.watch([ 'app/**/*.less' ], ['less']);
    gulp.watch([ 'app/index-template/template.html' ], ['index']);
});

gulp.task('default', ['watch']);
