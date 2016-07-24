const gulp =require('gulp');
const browserSync =require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('serve',function () {
    browserSync.init({
        server:{
            baseDir:"app"
        }
    });
    gulp.watch("app/css/*.css").on('change',reload);
    gulp.watch("app/*.html").on('change',reload);
})
