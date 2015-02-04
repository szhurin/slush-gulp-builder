var gulp = require('gulp');

var taskData = require('./__task_data.js');

var template = require('./_js_template.js');

gulp.task('js', ['js_dir_compiler'], function () {

    var vars = taskData['js'];

    var contents = template.getTemplate(vars);

    return contents;
});
/*
gulp.task('js', function () {

    return gulp.src('./js_parts/*.js')
        .pipe(debug({
            verbose: false
        }))
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./js/'));
});*/