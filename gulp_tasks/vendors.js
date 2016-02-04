'use strict';

var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var lib = require('bower-files')();

module.exports = function(gulp) {

  gulp.task('vendors-js', function() {
    return gulp.src(lib.ext('js').files)
      .pipe(concat('vendors.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/'));
  });

  gulp.task('vendors-css', function() {
    return gulp.src(lib.ext('css').files)
      .pipe(concat('vendors.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/'));
  });

  gulp.task('vendors', ['vendors-css', 'vendors-js']);

};
