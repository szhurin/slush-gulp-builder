var gulp = require('gulp'),  
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {  
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Name for the app?'}
  ],
  function (answers) {
    gulp.src(__dirname + '/app/templates/**') // Relative to __dirname
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./')) // Relative to cwd
      .pipe(install())
      .on('finish', function () {
        done(); // Finished!
      });
  });
});