# Modules
Metalsmith = require 'metalsmith'
sass = require 'metalsmith-sass'
serve = require 'metalsmith-serve'
watch = require 'metalsmith-watch'

# Environment
srcdir = __dirname

# Build Metalsmith
Metalsmith srcdir
  .use sass
    outputStyle: 'compressed'
    outputDir: 'assets/css/'
  .use serve
    port: '5310'
    verbose: true
  .use watch()
  .build (err) ->
    if err
      console.log err
    else
      console.log 'Site built succesfully!'