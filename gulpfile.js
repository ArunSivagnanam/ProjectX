var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var runSequence = require('run-sequence');

/** Cleans the dist folder, by removing everything */
gulp.task('clean',function(){
    return del('.dist');
});

/** Compiles server typescript files and moves output to dist/server */
gulp.task('buildServer',function(){
    var tsProject = ts.createProject(path.resolve('./002-server/tsconfig.json'));
    return gulp.src(path.resolve('./002-server/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./.dist/server')));
});

gulp.task('movePublicFolder',function(){
   
   return gulp.src(['002-server/public/**/*']).pipe(gulp.dest('.dist/server/public'));

});

gulp.task('moveLibs', function (done) {
    return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/@angular/core/bundles/core.umd.js',
      'node_modules/@angular/common/bundles/common.umd.js',
      'node_modules/@angular/compiler/bundles/compiler.umd.js',
      'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'node_modules/@angular/http/bundles/http.umd.js',
      'node_modules/@angular/router/bundles/router.umd.js',
      'node_modules/@angular/forms/bundles/forms.umd.js',
      'node_modules/rxjs/bundles/Rx.min.js'
      
    ]).pipe(gulp.dest('.dist/server/public/javascript/libs'));


});

gulp.task('buildClient',function(){
    var tsProject = ts.createProject(path.resolve('./001-client/tsconfig.json'));
    return gulp.src(path.resolve('./001-client/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./.dist/server/public/javascript')));
});

gulp.task('default',function(){
    runSequence('clean', 'buildServer', 'movePublicFolder','moveLibs','buildClient');
});
