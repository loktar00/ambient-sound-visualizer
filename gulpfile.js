var gulp        = require('gulp'),
    zip         = require('gulp-zip'),
    shell       = require('gulp-shell');


gulp.task('zip', function(){
    return gulp.src('./src/*')
        .pipe(zip('visualizer.nw'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['zip'],
    shell.task([
        // copy dependencies over. Overkill to do it each time
        'copy node_modules\\nodewebkit\\nodewebkit\\*.dll dist',
        'copy node_modules\\nodewebkit\\nodewebkit\\*.dat dist',
        'copy node_modules\\nodewebkit\\nodewebkit\\*.pak dist',
        // create the scr file
        'copy /b node_modules\\nodewebkit\\nodewebkit\\nw.exe+dist\\visualizer.nw dist\\visualizer.exe',
        'del dist\\visualizer.nw'
        ])
);

gulp.task('build-nix', ['zip'],
    shell.task([
        'cp -u node_modules/nodewebkit/nodewebkit/* dist/',
        'cat dist/nw dist/visualizer.nw > dist/visualizer && chmod +x dist/visualizer'
        ], {ignoreErrors: true})
    );

gulp.task('default', ['build']);