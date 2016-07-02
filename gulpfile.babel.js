'use strict';
//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import gulp                   from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source                 from 'vinyl-source-stream';
import buffer                 from 'vinyl-buffer';
import sourcemaps             from 'gulp-sourcemaps';

import assign                 from 'object-assign';
import browserify             from 'browserify';
import watchify               from 'watchify';
import babelify               from 'babelify';

import del                    from 'del';
import runSequence            from 'run-sequence';
import webserver              from 'gulp-webserver';
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Config
//-----------------------------------------------------------------------------
const config = {
  client: {
    resourcesPath: ['client/resources/**/*'],
    sourcePath: ['client/src/index.js', 'client/src/component/app.js']
  }
};
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------
function bundle(b) {
  return b.bundle()
    .on('error', (e) => console.error(e.stack))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
}
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Tasks
//-----------------------------------------------------------------------------
gulp.task('clean', () => del('public'));
gulp.task('copy-resources', () => gulp.src(config.client.resourcesPath).pipe(gulp.dest('public')));

gulp.task('compile', () => {
  const b = browserify(config.client.sourcePath, { debug: true })
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify(config.client.sourcePath, assign({ debug: true }, watchify.args)).transform(babelify);
  const w = watchify(b).on('update', () => bundle(w)).on('log', gutil.log);
  return bundle(w)
});

gulp.task('serve', () => {
  gulp.src('public')
    .pipe(webserver({
      port:'9090',
      livereload: true,
      open: true
    }));
});

gulp.task('build', (done) => runSequence('clean', 'copy-resources', 'compile', done));
gulp.task('default', (done) => runSequence('build', 'watch', 'serve', done));