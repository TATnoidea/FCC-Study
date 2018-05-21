const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sass = require('gulp-sass');
gulp.task('sass', () => {
  return gulp.src('app/scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('app/css/'))
  .pipe(reload({stream: true}));
})
gulp.task('html', () => {
  return gulp.src('app/*.html')
  .pipe(reload({stream: true}));
})
gulp.task('js', () => {
  return gulp.src('app/js/*.js')
  .pipe(reload({stream: true}));
})
gulp.task('server', ['sass'], () => {
  browserSync({
    server: {
      baseDir: './app/'
    }
  });

  gulp.watch(['app/scss/*.scss'], ['sass']);
  gulp.watch(['app/js/*.js'], ['js']);
  gulp.watch(['app/*.html'], ['html']);
})