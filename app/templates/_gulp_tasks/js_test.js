var gulp = require('gulp');

var taskData = require('./__task_data.js');

var template = require('./_js_template.js');

gulp.task('js_test', ['js_dir_compiler'], function () {

    var vars = taskData['js_test'];

    var contents = template.getTemplate(vars);

    return contents;
});