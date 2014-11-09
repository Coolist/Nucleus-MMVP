# Gulp
gulp = require 'gulp'
gulpsmith = require 'gulpsmith'
webserver = require 'gulp-webserver'

# Metalsmith Modules
Metalsmith = require 'metalsmith'
sass = require 'metalsmith-sass'
autoprefixer = require 'metalsmith-autoprefixer'

# Environment
srcdir = __dirname

# Build
gulp.task 'build', ->
  gulp.src 'src/**/*'
    .pipe gulpsmith()
      .use sass
        outputStyle: 'compressed'
        outputDir: 'assets/css/'
      .use autoprefixer()
    .pipe gulp.dest 'build'

gulp.task 'watch', ->
  gulp.watch 'src/**/*', ['build']

gulp.task 'serve', ->
  gulp.src 'build'
    .pipe webserver
      livereload: true
      port: 5310
      directoryListing: false
      open: true

gulp.task 'run', ['watch', 'build', 'serve']