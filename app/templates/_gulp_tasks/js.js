var gulp = require('gulp');

var taskData = require('./__task_data.js');

var template = require('./templates/_js_template.js');

gulp.task('js', ['js_dir_compiler'], function () {

    var vars = taskData['js'];

    var contents = template.getTemplate(vars);

    return contents;
});