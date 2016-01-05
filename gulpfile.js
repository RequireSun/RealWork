/**
 * Created by kelvinsun on 2015/12/9.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');

var react = require('gulp-react'),
    babel = require('gulp-babel');

var livereload = require('gulp-livereload'),
    liveServer = require('gulp-live-server');

var app = function (inPath) {
    return path.resolve('./app', inPath);
}, dist = function (inPath) {
    return path.resolve('./dist', inPath);
}, nodeModule = function (inPath) {
    return path.resolve('./node_modules', inPath);
};

gulp.task('html', function () {
    gulp.src(app('**/*.html'))
        .pipe(gulp.dest(dist('')))
        .pipe(livereload());
});

gulp.task('react', function () {
    gulp.src(app('scripts/**/*.jsx'))
        .pipe(react({ harmony: true }))
        .pipe(gulp.dest(dist('scripts')))
        .pipe(livereload());
});

gulp.task('javascript', function () {
    gulp.src([
        nodeModule('jquery/dist/jquery.js'),
        nodeModule('react/dist/react.js'),
        nodeModule('requirejs/require.js'),
    ])
        .pipe(gulp.dest(dist('scripts/lib')))
        .pipe(livereload());

    gulp.src(app('scripts/**/*.js'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest(dist('scripts')))
        .pipe(livereload());
});

gulp.task('watch', ['html', 'react', 'javascript'], function () {
    livereload.listen();

    gulp.watch(app('**/*.html'), ['html']);
    gulp.watch(app('scripts/**/*.jsx'), ['react']);
    gulp.watch(app('scripts/**/*.js'), ['javascript']);

    var server = liveServer.static('dist', 3000);
    server.start();
});
