const { src, dest, task, series, watch } = require("gulp");
const rm = require( "gulp-rm" );
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

task( "clean", () => {
    return src( "dist/*", { read: false }).pipe( rm() );
});

task ("copy:html", () => {
    return src('*.html')
        .pipe(dest('dist'))
        .pipe(reload({ stream: true }));
    });
task ("copy:images", () => {
    return src('src/img//*.*')
        .pipe(dest('dist/img'))
        .pipe(reload({ stream: true }));
    });
task ("copy:svg", () => {
    return src('src/svg//*.*')
        .pipe(dest('dist/svg'))
        .pipe(reload({ stream: true }));
    });

const styles = [
    "node_modules/normalize.css/normalize.css",
    "src/scss/main.scss"
];

task ("styles", () => {
    return src(styles)
      .pipe(sourcemaps.init())
      .pipe(concat('main.scss'))
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
    //   .pipe(px2rem())
      .pipe(autoprefixer({
        cascade: false
    }))
    //   .pipe(gcmq())
      .pipe(cleanCSS())
    //   .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(dest('dist'));
});

task('scripts', () => {
    return src("src/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat('main.js', {newLine: ";"}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/js'));
})


task('server', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        open: false 
    });
});

watch('scss/**/*.scss', series('styles'));
watch("*.html", series("copy:html"));
watch("js/*.js", series("scripts"));

task("default", series("clean", "copy:html","copy:images","copy:svg", "styles", "scripts","server"));

