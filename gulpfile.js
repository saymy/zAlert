/*!
 * gulp
 * creat by zcb 2015-09-15
 * 当前构建列表：zAlert.js
 */
 
// plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),   
	sourcemaps = require('gulp-sourcemaps'),    
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    del = require('del');  //把flexbox样式  根据浏览器自动补全前缀gulp方式

//paths
var paths = {
		zAlert:{
		  	less: 'src/less/*.less',
		  	scripts: 'src/js/*.js'
		}	
	};    




//zAlert
gulp.task('zAlert_clean', function(cb) {    
    del([
    	'dist/css/*.*',
    	'dist/js/*.*'    	
    ],cb);
});

gulp.task('zAlert_less',function() {
return	gulp.src(paths.zAlert.less)
	.pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write("../css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'zAlert_less task complete' }));
});

gulp.task('zAlert_scripts',function() {
return	gulp.src(paths.zAlert.scripts)
	.pipe(sourcemaps.init())
	.pipe(gulp.dest('dist/js'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
    .pipe(sourcemaps.write('../js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'zAlert_scripts task complete' }));
});

gulp.task('zAlert',['zAlert_clean'],function() {
    gulp.start(['zAlert_less','zAlert_scripts']);
});

// Default task
gulp.task('default',function() {
    gulp.start(['zAlert_less','zAlert_scripts']);
});



// Watch
gulp.task('watch', function() {
	gulp.watch([paths.zAlert.less],['zAlert_less']);
	gulp.watch([paths.zAlert.scripts],['zAlert_scripts']);
});