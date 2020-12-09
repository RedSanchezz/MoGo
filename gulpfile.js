var gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');




gulp.task("watch", function() {
    gulp.watch('./app/scss/**/*.scss', gulp.parallel("scss"));
    gulp.watch('./app/*.html', gulp.parallel("html"));
});


gulp.task("scss", function() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function() {
    return gulp.src('./app/js/*.js').pipe(gulp.dest('./dest/js'));
});

gulp.task("html", function() {
    return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    })
});
gulp.task("default", gulp.parallel('bs', 'watch'));