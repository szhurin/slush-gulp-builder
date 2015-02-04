var gulp = require('gulp');
var watch = require('gulp-watch');

var requireDir = require('require-dir');
var dir = requireDir('./_gulp_tasks');

var argv = require('minimist')(process.argv.slice(2));


gulp.task('js:watch', function () {
    watch('js_parts/*.js', function () {
        gulp.start('js');
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
    'js'
]);