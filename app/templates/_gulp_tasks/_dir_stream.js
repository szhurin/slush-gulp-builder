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

var taskData = require('./__task_data.js');

module.exports = function getDirStream(codeDir, filter) {

    var contents = gulp.src(codeDir + '/**/*.js')
        .pipe(filter)
        .pipe(order([
            "**/_start*.js",
            "**/!(_start|_end)*.js",
            "*/*/**/_end.js"
          ], {
            base: './'
        }))
        .pipe(debug({
            verbose: true
        }));

    return contents;
}