let uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  scriptsPATH = {
    "input": "./dev/assets/js/",
    "ouput": "./build/assets/js/"
  };

module.exports = function () {
  $.gulp.task('libsJS:dev', () => {
    return $.gulp.src(['node_modules/fotorama/fotorama.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/inputmask/dist/jquery.inputmask.bundle.js'
      ])
      .pipe(concat('libs.min.js'))
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('libsJS:build', () => {
    return $.gulp.src(['node_modules/fotorama/fotorama.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/inputmask/dist/jquery.inputmask.bundle.js'
      ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('js:dev', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:build', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });

  $.gulp.task('js:build-min', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });
};