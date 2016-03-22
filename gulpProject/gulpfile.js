/*
This includes the gulp core and plugins associated with the tasks that we will be performing. Next, we setup each of our separate tasks.
These tasks are lint, sass, scripts and default.
*/
// Include gulp
var gulp = require('gulp');

// Include Our Plugins :
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

var connect = require('gulp-connect');

// Declare the path variables
var dest = '_dist/';

gulp.task('connect', function() {
  connect.server({
    port : 7000,
    root: 'app',
    livereload: true
  });
});
gulp.task('html', function () {
  gulp.src('app.min.js')
    .pipe(connect.reload());
});

/*
Lint Task : Our lint task checks any JavaScript file in our js/ directory and makes sure there are no syntax errors in our code.
*/
gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
Compile Our Sass : The sass task compiles any of our Sass files in our scss/ directory into .css and saves the compiled .css file in our css/ directory.
*/
gulp.task('sass', function() {
    return gulp.src('client/asset/*.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(dest+'/css'));
});

/*
Concatenate & Minify JS :The scripts task concatenates all JavaScript files in our js/ directory and saves the ouput to our dist/ directory.
Then gulp takes that concatenated file, minifies it, renames it and saves it to the dist/ directory alongside the concatenated file.
*/
gulp.task('scripts', function() {
    return gulp.src('*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(dest+'js'));
});

/*
.JSX to .JS task:
*/
gulp.task('jsxtojs', function () {
	return gulp.src('shared/components/*.jsx')
		.pipe(react())
		.pipe(gulp.dest(dest+'jsx'));
});

/*
Watch Files For Changes : The watch task is used to run tasks as we make changes to our files.
As you write code and modify your files, the gulp.watch() method will listen for changes and automatically run our tasks again so we don't have to continuously jump back to our command-line and run the gulp command each time.
*/
gulp.task('watch', function() {
    gulp.watch('*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

/*
Default Task: we have our default task which is basically a wrapper to our other tasks.
This will be the task that is ran upon entering gulp into the command line without any additional parameters.
*/
gulp.task('default', ['lint', 'sass', 'jsxtojs', 'scripts', 'connect', 'html', 'watch']);

/*
Gulp command not using:
.pipe(rename('all.min.js'))
*/
