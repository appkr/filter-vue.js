var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('default', function() {
  return gulp.src('')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({ host: 'localhost' });
  gulp.watch('*', ['default']);
});