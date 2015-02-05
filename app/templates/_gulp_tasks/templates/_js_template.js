var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var replace = require("gulp-batch-replace");
var gulpif = require('gulp-if');
var stripDebug = require('gulp-strip-debug');
var imports = require('gulp-imports');
var cat = require('gulp-cat');

var argv = require('minimist')(process.argv.slice(2));

var getDirStream = require('./_dir_stream.js');

var fs = require('fs');
var tasksDir = fs.realpathSync(__dirname + '/..');

var plugins = fs.readdirSync(tasksDir + '/plugins/');

var curTasksDirName = tasksDir.substr(tasksDir.lastIndexOf('/') + 1);

console.log(curTasksDirName);

var includes = [];
for (var i in plugins) {
    var plugin = plugins[i];
    var fname = curTasksDirName + '/plugins/' + plugin;
    var entry = ['%' + plugin + '%', fname];
    includes.push(entry);
    entry = ['%' + plugin.replace(/.js/g, '') + '%', fname];
    includes.push(entry);
}

console.log(includes);

module.exports = {

    getTemplate: function (vars) {

        var filterInit = gulpFilter(vars.filterInitArray);
        var isProd = argv.env === 'prod' ? true : false;

        var contents = getDirStream(vars.codeDir, filterInit);

        console.log(vars.globalReplaceArray[0] !== undefined && typeof vars.globalReplaceArray[0] === 'object');

        contents
            .pipe(replace(includes))
            .pipe(imports())
            .pipe(concat(vars.destFileName))
            .pipe(gulpif((vars.globalReplaceArray[0] !== undefined && typeof vars.globalReplaceArray[0] === 'object'),
                replace(vars.globalReplaceArray)))
            .pipe(gulpif(isProd, stripDebug()))
            .pipe(gulpif(isProd, uglify({
                mangle: false
            }), beautify()))
            .pipe(gulp.dest(vars.dest))

        return contents;
    }
}