// Requis
var gulpfile = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

// Variables de chemins
var source = 'src/'; // dossier de travail
var destination = 'assets/'; // dossier à livrer
const jsSource = 'src/scripts/',
    jsDestination = 'assets/scripts/'

gulpfile.task('jsMinifier', function(done) {
    gulpfile.src(jsSource+"*.js") // path to your files
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulpfile.dest(jsDestination))
        .pipe(browserSync.stream())
    done()
});

gulpfile.task('jsLint', function(done) {
    gulpfile.src(jsSource+"/**/*.js") // path to your files
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter()); // Dump results
    done()
})

gulpfile.task('sass', function() {
    return gulpfile.src(source + 'scss/main.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer())
        .pipe(gulpfile.dest(destination + 'styles/'))
});

gulpfile.task('cssMinfier', function() {
    return gulpfile.src(destination + 'styles/main.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            'suffix': '.min'
        }))
        .pipe(gulpfile.dest(destination + 'styles/'))
        .pipe(browserSync.stream())
});

gulpfile.task('connect-sync',function(){
    plugins.connectPhp.server({},function(){
        browserSync({
            proxy: '127.0.0.1:8000'
          });
    })
    gulpfile.watch('./src/scripts/*.js', gulpfile.series('js'))
    gulpfile.watch('./src/scss/**/*.scss', gulpfile.series('css'))
    gulpfile.watch('**/*.php').on('change', function () {
        browserSync.reload()
      });
});

gulpfile.task('disconnect', function() {
    connect.closeServer();
});

gulpfile.task('js', gulpfile.series('jsLint', 'jsMinifier'))
gulpfile.task('css', gulpfile.series('sass', 'cssMinfier'))
// gulpfile.task('watch', function() {
//     gulpfile.watch('./src/scripts/*.js', gulpfile.series('js','reload'))
//     gulpfile.watch('./src/scss/**/*.scss', gulpfile.series('css','reload'))
//     gulpfile.watch('**/*.php', gulpfile.series('reload'))
// });

gulpfile.task('default', gulpfile.series('js','css','connect-sync','disconnect'));