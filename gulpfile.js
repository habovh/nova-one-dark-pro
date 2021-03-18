'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('scss', function () {
	 return gulp.src('./One Dark Pro.scss')
	 .pipe(sass().on('error', sass.logError))
	 .pipe(gulp.dest('./OneDarkPro.novaextension/Themes/'));
});

gulp.task('scss:watch', function () {
	 gulp.watch('./One Dark Pro.scss', gulp.series('scss'));
});