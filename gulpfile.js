var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var symlink = require('gulp-symlink');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var pug = require('gulp-pug');

gulp.task('clean', function () {
    return del(['bin/**']);
});

gulp.task('build::api', function(){
  var apiProject = ts.createProject(
    'src/api/tsconfig.json',
    { typescript: require('typescript') }
  );

  return gulp.src(['src/api/**/*.ts'])
    .pipe(apiProject())
    .on('error', function() { process.exit(1) })
    .pipe(gulp.dest('bin/api'))
});

gulp.task('build::app', function(){
  var appProject = ts.createProject(
    'src/app/tsconfig.json',
    { typescript: require('typescript') }
  );
  
  return gulp.src(['src/app/**/*.ts'])
    .pipe(appProject())
    .on('error', function() { process.exit(1) })
    .pipe(gulp.dest('bin/app'));
});

gulp.task('build', ['build::api', 'build::app']);

gulp.task('static::app::root', function(){
  return gulp.src(['src/app/index.html',
    'src/app/systemjs.config.js'])
    .pipe(gulp.dest('bin/app'))
});

gulp.task('static::app::views', function(){
  return gulp.src(['src/app/views/**/*.html'])
    .pipe(gulp.dest('bin/app/views'))
});

gulp.task('symlink::node_modules', function(){
  return gulp.src('node_modules')
    .pipe(symlink('bin/app/node_modules', {force: true})) 
});

gulp.task('symlink::api', function(){
  return gulp.src('bin/api')
    .pipe(symlink('bin/app/api', {force: true})) 
});

gulp.task('materialize::replace', function() {
  return gulp.src(['node_modules/materialize-css/sass/components/_variables.scss'])
    .pipe(replace('../fonts/roboto/', 'fonts/roboto/'))
    .pipe(replace(/primary-color: color\(.*?\)/, 'primary-color: color("light-blue", "lighten-1")'))
    .pipe(replace(/secondary-color: color\(.*?\)/, 'secondary-color: color("light-green", "base")'))
    .pipe(gulp.dest('node_modules/materialize-css/sass/components'));
});

gulp.task('materialize::fonts', function() {
  return gulp.src('node_modules/materialize-css/fonts')
    .pipe(symlink('bin/app/styles/fonts', {force: true})) 
});

gulp.task('materialize', ['materialize::replace', 'materialize::fonts']);

gulp.task('styles', ['materialize'], function () {
  return gulp.src(['src/app/styles/dictio.scss', 'node_modules/materialize-css/sass/materialize.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('bin/app/styles'));
});

gulp.task('pug', function () {
  return gulp.src('src/app/views/**/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('bin/app/views'));
});

gulp.task('static', ['pug', 'static::app::root', 'styles', 'static::app::views', 'symlink::node_modules', 'symlink::api']);

gulp.task('buildall', ['build'], function() {
  gulp.start('static')
});

gulp.task('rebuild', ['clean'], function () {
  gulp.start('buildall');
});

gulp.task('default', ['rebuild']);
