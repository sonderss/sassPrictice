const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass",function(){
	
	gulp.src("*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:"compact"}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
})
gulp.task("watch",function(){
	gulp.watch("*.scss",["sass"]);
})
