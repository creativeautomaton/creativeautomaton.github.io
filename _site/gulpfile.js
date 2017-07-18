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
  scripts: ['./**/*.js'],
  images: ['./assets/img/**/*'],
  sass: ['./**/*.scss']
};

gulp.task('concatjs', function() {
  return gulp.src([
    // Main JS Files
    'assets/js/jquery-1.12.4.min.js',
    './assets/js/bootstrap.min.js',

    // Pages

  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function (cb) {
  console.log('running js uglify compression...')
  pump([
      gulp.src('./assets/js/app.js'),
       uglify(),
      gulp.dest('./dist')
    ],
    cb
  );
});

// gulp.task('sass', () =>
// 	sass('./assets/scss/*.scss', {
//     // sourcemap: true,
//     style: 'compressed'
//   })
// 		.on('error', sass.logError)
// 		.pipe(gulp.dest('./dist'))
// );

// Copy all static images
gulp.task('images', function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./dist/img'));
});

// watch files for changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['concatjs'] );
  // gulp.watch(paths.images, ['images']);
});

// Runs on 'gulp'
gulp.task('default', ['concatjs', 'sass',  'watch'], function() { });

// un-used for the time being

// const {phpMinify} = require('@cedx/gulp-php-minify');
//
// gulp.task('minify:php', () => gulp.src([
//   './templates/_header.php',
//   './templates/_nav.php',
//   './templates/_side_menu.php',
//   './templates/_footer.php',
//   './views/**/*.php',
// ], {read: false})
//   .pipe(phpMinify())
//   .pipe(gulp.dest('/mini-php'))
// );

// gulp.watch(['./*.html', './*.scss', './*.css', './*.js']);

// gulp.watch('./assets/js/**/*.js', function () {
//     gulp.start('concatjs', 'uglify');
// });
// gulp.watch('./assets/scss/*.scss', function () {
//   console.log(' Edited a .SCSS Compiling SASS...')
//     gulp.start('sass');
// });
// gulp.watch(['lib/**', 'test/**'], batch(function(events, cb) {
//     events.on('data', console.log).on('end', cb);
// }));
