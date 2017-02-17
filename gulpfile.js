var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-tsc');
var symlink = require('gulp-symlink');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var pug = require('gulp-pug');
 
gulp.task('clean', function () {
    return del(['bin/**']);
});

gulp.task('build::api', function(){
  return gulp.src(['src/api/**/*.ts'])
    .pipe(typescript({
        module: "commonjs",
        target: "es6",
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    }))
    .pipe(gulp.dest('bin/api'))
});

gulp.task('build::app', function(){
  return gulp.src(['src/app/**/*.ts'])
    .pipe(typescript({
        module: "commonjs",
        target: "es5",
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    }))
    .pipe(gulp.dest('bin/app'))
});

gulp.task('build', ['build::api', 'build::app']);

gulp.task('static::app::root', function(){
  return gulp.src(['src/app/index.html',
    'src/app/systemjs.config.js'])
    .pipe(gulp.dest('bin/app/app'))
});

gulp.task('static::app::views', function(){
  return gulp.src(['src/app/views/**/*.html'])
    .pipe(gulp.dest('bin/app/app/views'))
});

gulp.task('symlink::node_modules', function(){
  return gulp.src('node_modules')
    .pipe(symlink('bin/app/app/node_modules', {force: true})) 
});

gulp.task('symlink::api', function(){
  return gulp.src('bin/app/api')
    .pipe(symlink('bin/app/app/api', {force: true})) 
});

gulp.task('materialize::replace', function() {
  return gulp.src(['node_modules/materialize-css/sass/components/_variables.scss'])
    .pipe(replace('../fonts/roboto/', 'fonts/roboto/'))
    .pipe(replace('materialize-red', 'light-blue'))
    .pipe(replace('teal', 'light-green'))
    .pipe(gulp.dest('node_modules/materialize-css/sass/components'));
});

gulp.task('materialize::fonts', function() {
  return gulp.src('node_modules/materialize-css/fonts')
    .pipe(symlink('bin/app/app/styles/fonts', {force: true})) 
});

gulp.task('materialize', ['materialize::replace', 'materialize::fonts']);

gulp.task('styles', ['materialize'], function () {
  return gulp.src(['src/app/styles/dictio.scss', 'node_modules/materialize-css/sass/materialize.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('bin/app/app/styles'));
});

gulp.task('pug', function () {
  return gulp.src('src/app/views/**/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('bin/app/app/views'));
});

gulp.task('static', ['pug', 'static::app::root', 'styles', 'static::app::views', 'symlink::node_modules', 'symlink::api']);

gulp.task('buildall', ['build'], function() {
  gulp.start('static')
});

gulp.task('rebuild', ['clean'], function () {
  gulp.start('buildall');
});

gulp.task('default', ['rebuild']);
