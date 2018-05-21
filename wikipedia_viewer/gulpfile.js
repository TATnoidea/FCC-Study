const gulp = require('gulp');
const sass = require('gulp-sass');
gulp.task('sass', () => {
  return gulp.src('app/scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('app/css/'))
})
gulp.watch('app/scss/*.scss', ['sass']);