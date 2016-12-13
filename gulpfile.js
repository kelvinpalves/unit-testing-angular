var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');

gulp.task('analyze', analyze);
gulp.task('clean', clean);
gulp.task('compile', compile);
gulp.task('css', css);
gulp.task('js', js);

function analyze() {
	gulp.src([].concat(paths.js))
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
}

function clean() {
	del([].concat(paths.build));
}

function compile() {
	gulp.start('clean');
	gulp.start('css');
	gulp.start('js');
}

function css() {
	return gulp.src([].concat(paths.css))
		.pipe(concat('all.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.build));
}

function js() {
	return gulp.src([].concat(paths.js))
		.pipe(concat('all.min.js'))
		.pipe(ngAnnotate({ add: true }))
        .pipe(uglify({ mangle: true }))
		.pipe(gulp.dest(paths.build));
}