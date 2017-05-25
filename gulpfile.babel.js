import gulp from 'gulp';
import run from 'run-sequence';
import babel from 'gulp-babel';

gulp.task('js', () => (
  gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'))
));

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('build', ['js']);

gulp.task('dev', () => run(
  ['build'],
  ['watch'],
));

gulp.task('default', ['build']);
