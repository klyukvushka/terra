var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task("images", function (){
	gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
});

gulp.task('javascript', function() {  
  return gulp.src('src/javascript/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('dist/javascript'))
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['sass', 'images', "javascript", "html"], function() {
    gulp.watch(['src/styles/**/*.scss'], ['sass']);
    gulp.watch(['src/images/**/*'], ['images']);
    gulp.watch(["src/javascript/*.js"], ["javascript"]);
    gulp.watch(["src/*.html"], ["html"]);
});

gulp.task("default", ['watch']); 