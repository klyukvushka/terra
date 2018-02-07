var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
 
gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/.css'));
});

gulp.task("images", function (){
	gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
});


gulp.task('watch', ['sass', 'images'], function() {
    gulp.watch(['src/styles/**/*.scss'], ['sass']);
    gulp.watch(['src/images/**/*'], ['images']);
});

gulp.task("default", ['watch']); 