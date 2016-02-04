'use strict';

var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cssBase64 = require('gulp-css-base64');
var livereload = require('gulp-livereload');

module.exports = function (gulp) {

	gulp.task('less', function() {
	    return  gulp.src([ 'app/**/*.less' ])
	    .pipe(cssBase64())
	    .pipe(concat('build.less'))
	    .pipe(less())
	    .pipe(autoprefixer('last 10 versions', 'ie 9'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('build/'))
			.pipe(livereload());
	});

};
