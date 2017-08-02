var deploy = require("gulp-gh-pages");
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var imagemin = require('gulp-imagemin');

var paths = {
  php: ['./views/**/*.php'],
  scripts: ['./assets/js*.js'],
  images: ['./assets/images/*'],
  sass: ['./**/*.scss']
};

gulp.task('concatjs', function() {
  return gulp.src([
    './assets/js/jquery-3.2.1.min.js',
    './assets/js/bootstrap.min.js',
    './assets/js/custom.js',
    './assets/js/nav.js',
    // './assets/js/git.js',
    // './assets/js/agency.min.js',
    './assets/js/contact-form.js',
    './assets/js/bootstrap-validation.js'
 ])
   .pipe(concat('app.js'))
   .pipe(gulp.dest('./assets/js'));
});

// Copy all static images
gulp.task('images', function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 9}))
    .pipe(gulp.dest('./assets/images/dist'));
});

// watch files for changes
// gulp.task('watch', function() {
//   gulp.watch(paths.sass, ['sass']);
//   gulp.watch(paths.scripts, ['concatjs'] );
//   // gulp.watch(paths.images, ['images']);
// });

// Runs on 'gulp'
gulp.task('default', ['concatjs', 'images'], function() { });


// gulp.task("deploy", ["jekyll-build"], function () {
//     return gulp.src("./_site/**/*")
//         .pipe(deploy());
// });
