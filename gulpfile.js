/**
 * Created by Jason on 10/21/2015.
 */
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');
var html2js = require('gulp-html2js');

gulp.task('scripts', function(){
    return gulp.src('src/*.js')
        .pipe(concat('chainsaw.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('itchy'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('itchy'))
        .pipe(connect.reload());
        console.log('Html Changed');
});

gulp.task('css', function(){
    return gulp.src('src/*.css')
        .pipe(gulp.dest('itchy'))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('src/*.js', ['scripts']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/*.css', ['css']);
});

gulp.task('connect', function(){
    connect.server({
        port: 3000,
        livereload: false,
        fallback: 'index.html'
    });
});

gulp.task('default', ['scripts', 'html', 'css', 'connect', 'watch']);