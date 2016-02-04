'use strict';

var angularTemplates = require('gulp-angular-templatecache');
var inline_image_path = require('gulp-inline-image-path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

module.exports = function (gulp) {

    gulp.task('html', function () {
        return gulp.src([ 'app/**/*.html' ])
            .pipe(inline_image_path({ path: "build/images" }))
            .pipe(angularTemplates({
                module: 'bookmarkapp',
                root: 'app/',
                filename: 'templates.js'
            }))
            .pipe(gulp.dest('build/'));
    });

    gulp.task('build', [ 'html' ], function() {
        return gulp.src([ 'app/app.module.js', 'app/**/*.js', 'build/templates.js' ])
            .pipe(concat('build.js'))
            // .pipe(uglify())
            .pipe(gulp.dest('build/'))
            .pipe(livereload());
    });
};
