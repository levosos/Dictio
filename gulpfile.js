var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-tsc');
var symlink = require('gulp-symlink');
var sass = require('gulp-sass');

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
  return gulp.src(['src/app/views/**/*'])
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

gulp.task('styles', function () {
  return gulp.src(['src/app/styles/dictio-theme.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('bin/app/app/styles'));
});

gulp.task('static', ['static::app::root', 'styles', 'static::app::views', 'symlink::node_modules', 'symlink::api']);

gulp.task('buildall', ['build'], function() {
  gulp.start('static')
});

gulp.task('rebuild', ['clean'], function () {
  gulp.start('buildall');
});

gulp.task('default', ['rebuild']);
