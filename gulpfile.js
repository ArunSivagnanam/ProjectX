var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('clean',function(){
    return del('dist');
});

gulp.task('buildServer',function(){
    var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
    return gulp.src(path.resolve('./server/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./dist/server')));
});

gulp.task('buildClient',function(){
    var tsProject = ts.createProject(path.resolve('./client/tsconfig.json'));
    return gulp.src(path.resolve('./client/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./dist/client')));
});

gulp.task('default',function(){
    runSequence('clean','buildServer','buildClient');
});
