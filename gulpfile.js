var gulp = require('gulp');
var uncss = require('gulp-uncss');
var phantom = require('phantomjs');
 
gulp.task('default', function() {
    return gulp.src('css/*.css')
        .pipe(uncss({
            html: ['http://localhost/www/crograph/']
        }))
        .pipe(gulp.dest('../production/css'));
});