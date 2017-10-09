var gulp = require('gulp'),
    minJs = require("gulp-uglify"),
    minCss = require("gulp-clean-css"),
    rename = require('gulp-rename');
gulp.task("minCss",function(){
	gulp.src("css/style.css")
	    .pipe(minCss())
	    .pipe(rename("style.min.css"))
	    .pipe(gulp.dest("./css"))
})
gulp.task('minJs',function(){
	gulp.src('js/js.js')
		.pipe(minJs())
		.pipe(rename('js.min.js'))
		.pipe(gulp.dest('./js'))
})
gulp.task('default',['minCss','minJs']);