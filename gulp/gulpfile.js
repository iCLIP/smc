/* ----------------------------------------------------------------------------------
node_modulesに格納されている各プラグインを読み込む
---------------------------------------------------------------------------------- */
var gulp         = require('../../../node_modules/gulp');
var browserSync  = require('../../../node_modules/browser-sync');
var watch        = require('../../../node_modules/gulp-watch');
var sass         = require('../../../node_modules/gulp-sass');
var runSequence  = require('../../../node_modules/run-sequence');
var plumber      = require('../../../node_modules/gulp-plumber');
var notify       = require('../../../node_modules/gulp-notify');
//sass設定
var sourcemaps   = require('../../../node_modules/gulp-sourcemaps');
var csso = require('../../../node_modules/gulp-csso');
var postcss = require('../../../node_modules/gulp-postcss');
var cssnext = require('../../../node_modules/postcss-cssnext');
var mqpacker = require('../../../node_modules/css-mqpacker');
//webpack設定
var webpack       = require('../../../node_modules/webpack');
var webpackStream = require('../../../node_modules/webpack-stream');

/* ----------------------------------------------------------------------------------
ファイルの変更を監視して、変更を即座にブラウザ反映
---------------------------------------------------------------------------------- */
gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: 'latest-smc-corporate/'
	});
});
gulp.task('bs-reload', function() {
	browserSync.reload();
});


/* ----------------------------------------------------------------------------------
SASSをcssにコンパイル
---------------------------------------------------------------------------------- */
var AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  'ie >= 10',
  'iOS >= 7',
  'Android >= 4.4'
];
gulp.task('sass', function() {
    var processors = [
      cssnext({
            browsers: AUTOPREFIXER_BROWSERS
        })
    ];
    return gulp.src(['src/sass/**/*.scss']).pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(csso())//min化
    .pipe(postcss(processors))//postcss化
    .pipe(postcss([mqpacker()]))//メディアクエリ一括化
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../public/css/'));
});

/* ----------------------------------------------------------------------------------
jsファイルの更新
---------------------------------------------------------------------------------- */
gulp.task('webpack', function () {
    return gulp.src('src/js/**/*.js').pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
        }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('../public/js/'));
});

/* ----------------------------------------------------------------------------------
タスクを並列/直列処理
---------------------------------------------------------------------------------- */
gulp.task('build_scss', function(done) {
	runSequence('sass','bs-reload', done);
});

gulp.task('build_js', function (done) {
    runSequence('webpack','bs-reload', done);
});


/* ----------------------------------------------------------------------------------
ファイルの監視
---------------------------------------------------------------------------------- */
gulp.task('default',['browser-sync'],function() {
    
	watch(['src/sass/**/*.scss'], function(event) {
		gulp.start(['build_scss']);
	});
    
    watch(['src/js/**/*.js'], function(event) {
        gulp.start(['build_js']);
    });
    
	watch(['../public/images/**/*.+(jpg|gif|png|ico|svg)'], function(event) {
		gulp.start(['bs-reload']);
	});
    
	gulp.watch('../public/**/*.+(html|php)', ['bs-reload']);
});

