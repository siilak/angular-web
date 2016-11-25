'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');

// gulp.task('sass', function () {
//   return gulp.src('./src/assets/scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//       .pipe(cssmin())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest('src/assets/css'))
//     .pipe(autoprefixer({
//         browsers: ['last 2 versions'],
//         cascade: false
//     }));
// });

gulp.task('less', function () {
    return gulp.src('./src/assets/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/assets/css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }));

});

var jsFiles = ['' +
    './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    jsDest = './src/assets/js';

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', function () {
    // gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
    gulp.watch('./src/assets/less/**/*.less', ['less']);
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});
