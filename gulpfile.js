var gulp = require('gulp');

var src = './src';
var dist = './dist';

var path = function (root, path) {
    return root + '/' + path;
}

gulp.task("build", ["copy:sass1", 'copy:sass2', 'copy:es5'], function () {
});

gulp.task("build:sass", function () {
    return gulp.src(path(src, 'styles/**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dist));
});

gulp.task("copy:sass1", function () {
    return gulp.src(path(src, 'styles/**/*.scss'))
    .pipe(gulp.dest(path(dist, "sass/styles")));
});

gulp.task("copy:sass2", function () {
    return gulp.src(path(src, 'styles.scss'))
    .pipe(gulp.dest(path(dist, 'sass')));
});

gulp.task("copy:es5", function () {
    return gulp.src(path(dist, '@daybreaksoft/*'))
    .pipe(gulp.dest(dist));
});