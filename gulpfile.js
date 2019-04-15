const gulp = require('gulp'),
      sass = require('gulp-sass'),
      minCss = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      plumber = require("gulp-plumber");


// style
gulp.task('style', function(){
  return gulp
    .src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("app/css/"))
    .pipe(rename('style.min.css'))
    .pipe(minCss())
    .pipe(gulp.dest("app/css/"))
});


//  watch
gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("style"))
})


// defoult
gulp.task("default", gulp.parallel("style", "watch"));