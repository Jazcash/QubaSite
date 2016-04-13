var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	responsive = require('gulp-responsive'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	gulp.src('./public/css/*.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload());
});

gulp.task('images', function(){
	gulp.src('./public/img/sections/*.{png,jpg}')
		.pipe(responsive({
			'*.png': {
				format: 'jpeg',
				quality: 70,
				rename: {extname: '.jpg'}
			},
			'*.jpg': {
				quality: 70
			}
		}))
		.pipe(gulp.dest('./public/img/sections/compressedJpgs'))
});

gulp.task('watch', function() {
	gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('develop', function () {
	livereload.listen();
	nodemon({
		script: 'app.js',
		ext: 'js handlebars',
		stdout: false
	}).on('readable', function () {
		this.stdout.on('data', function (chunk) {
			if(/^Express server listening on port/.test(chunk)){
				livereload.changed(__dirname);
			}
		});
		this.stdout.pipe(process.stdout);
		this.stderr.pipe(process.stderr);
	});
});

gulp.task('default', [
	'sass',
	'images',
	'develop',
	'watch'
]);
