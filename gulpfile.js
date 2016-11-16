var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	merge = require('merge-stream'),
	del = require('del');

var paths = {
	devScss : './assets/scss/dev/*.scss',
	devCss : './assets/css/dev',
	prodScss : './assets/scss/prod/*.scss',
	prodCss : './assets/css/prod',
	jsSrc : './assets/js/dev/src/*.js',
	devJsDest : './assets/js/dev/test',
	prodJsDest : './assets/js/prod/dist'
};

var devSassOptions = {
	precision : 5,
	indentType : 'tab',
	indentWidth : 2,
	errLogToConsole : true,
	outputStyle : 'expanded',
	sourceComments : true
};

var prodSassOptions = {
	precision : 5,
	errLogToConsole : false,
	outputStyle : 'compressed',
	sourceComments : false
};

var autoprefixerOptions = {
	browsers : ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', function () {
	var devStyles = gulp.src(paths.devScss)
		.pipe(sourcemaps.init())
		.pipe(sass(devSassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.devCss));

	var devScripts = gulp.src(paths.jsSrc)
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.devJsDest));

    return merge(devStyles, devScripts);
});

gulp.task('watch', function () {
  	return gulp.watch([paths.devScss, paths.jsSrc], ['build']);
});

gulp.task('clean', function () {
	return del([
		paths.prodCss + '/screen.css',
		paths.prodJsDest + '/script.js'
	]);
});

gulp.task('prod', ['clean'], function () {

	var prodStyles = gulp.src(paths.prodScss)
		.pipe(sourcemaps.init())
		.pipe(sass(prodSassOptions))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.prodCss));

	var prodScripts = gulp.src(paths.jsSrc)
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.prodJsDest));

    return merge(prodStyles, prodScripts);
});
