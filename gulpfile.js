var gulp = require('gulp');
var sass = require('gulp-sass');

// Runs sass compile function
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

// Watches for sass changes
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})
