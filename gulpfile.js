// Resource:  Udacity office hours https://plus.google.com/u/0/hangouts/onair/watch?hid=hoaevent%2Fcv9skua854h0rr1qf9b6pisl87g&ytl=kte_g-KMbSs&hl=en&t=253.719

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('minCSS'));
});