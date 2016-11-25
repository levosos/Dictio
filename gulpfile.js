var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-tsc');
var symlink = require('gulp-symlink');

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

gulp.task('static::app::root', function(){
  return gulp.src(['src/app/index.html',
    'src/app/systemjs.config.js'])
    .pipe(gulp.dest('bin/app/app'))
});

gulp.task('static::app::styles', function(){
  return gulp.src(['src/app/styles/dictio-theme.css'])
    .pipe(gulp.dest('bin/app/app/styles'))
});

gulp.task('static::app::views', function(){
  return gulp.src(['src/app/views/**/*.html'])
    .pipe(gulp.dest('bin/app/app/views'))
});

gulp.task('symlink::node_modules', function(){
  return gulp.src('node_modules')
    .pipe(symlink('bin/app/app/node_modules')) 
});

gulp.task('static', ['static::app::root', 'static::app::styles', 'static::app::views', 'symlink::node_modules']);

gulp.task('build', ['build::api', 'build::app', 'static']);

gulp.task('rebuild', ['clean'], function () {
  gulp.start('build');
});

gulp.task('default', ['rebuild']);
