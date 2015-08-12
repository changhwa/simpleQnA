"use strict";

var gulp = require('gulp');

gulp.task('less', function(){

  var less = require('gulp-less');
  var concat = require('gulp-concat');

  return gulp.src('./less/*.less')
    .pipe(concat('style.less'))
    .pipe(less())
    .pipe(gulp.dest('./css/'));
});


gulp.task('jshint', function(){

  var jshint = require('gulp-jshint');

  return gulp.src(['./js/*.js','./js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build',['jshint','less']);