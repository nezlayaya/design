var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('delete', function(cb) {
    del('style.css', cb);
});

gulp.task('css', function() {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('style.scss', ['css']);
})

gulp.task('sass', function() {

    gulp.src(['*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', [ 'delete', 'sass', 'watch' ]);

