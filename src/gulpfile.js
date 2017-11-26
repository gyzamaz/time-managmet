// loads various gulp modules
var gulp = require("gulp");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

gulp.task("default", function () {
    console.log("Hello Gulp!")
});

gulp.task("css", function(){
    gulp.src("src/css/**/*.css")
        .pipe(minifyCSS())
        .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("dist/css"))
});

gulp.task("sass", function () {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./sass/**/*.scss", ["sass"]);
});
