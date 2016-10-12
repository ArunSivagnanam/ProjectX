/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'javascript/serviceProviderApp.module',
            // angular bundles
            '@angular/core': 'javascript/libs/core.umd.js',
            '@angular/common': 'javascript/libs/common.umd.js',
            '@angular/compiler': 'javascript/libs/compiler.umd.js',
            '@angular/platform-browser': 'javascript/libs/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'javascript/libs/platform-browser-dynamic.umd.js',
            '@angular/http': 'javascript/libs/http.umd.js',
            '@angular/router': 'javascript/libs/router.umd.js',
            '@angular/forms': 'javascript/libs/forms.umd.js',
            // other libraries
            'rxjs': 'javascript/libs/rxjs',
            'angular-in-memory-web-api': 'libs:angular-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
