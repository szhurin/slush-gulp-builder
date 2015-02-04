var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var order = require("gulp-order");
var replace = require("gulp-batch-replace");
var gulpif = require('gulp-if');
var stripDebug = require('gulp-strip-debug');
var imports = require('gulp-imports');
var cat = require('gulp-cat');


var argv = require('minimist')(process.argv.slice(2));

console.log(argv);

var taskData = require('./__task_data.js');

var getDirStream = require('./_dir_stream.js');


gulp.task('js_dir_compiler', function () {

    var type = argv['_'][0];
    var vars = taskData[type] || undefined;
    if (vars === undefined) {
        type = 'js';
        vars = taskData[type] || undefined;
        if (vars === undefined) {
            return false;
        }
    }
    var filterNoInit = gulpFilter(vars.filterNoInitArray);

    var contents = getDirStream(vars.codeDir, filterNoInit);

    contents.pipe(concat(vars.destFileName))
        .pipe(debug({
            verbose: false
        }))
        .pipe(gulp.dest(vars.initDest))

    return contents;

});