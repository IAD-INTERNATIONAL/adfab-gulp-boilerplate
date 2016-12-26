module.exports = {
    vhost: 'gulp-boilerplate.local',

	source: {
        bootStrapSass: ['./node_modules/bootstrap-sass/'],
        bootStrapJsEntryFile: ['./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js' ],
        
        lessWatchFileList: [ './src/assets/less/**/*.less' ],
        lessCompileFileList: [ './src/assets/less/style.less' ],
        sassWatchFileList: [ './src/assets/sass/**/*.scss' ],
        sassCompileFileList: [ './src/assets/sass/**/*.scss' ],
        libFileList: [ './src/assets/scripts/lib/*.js' ],
        jsEntryFile: [ './src/assets/scripts/app.js' ],
        imageFileList: [ './src/assets/images/**/*' ],
        viewFileList: [ './src/assets/views/**/*.html', './src/assets/views/**/*.json', './src/assets/views/**/*.php' ],
        fontFileList: [ './src/assets/fonts/**/*' ],
        fontIconFileList: [ './src/assets/icons/*.svg'],
	},

    sassConfigs: {
        includePaths : ['./node_modules/bootstrap-sass/assets/stylesheets']
    },
    
    minifyHTML: true,

	destination: {
	    assetsFolder: './www/', // General assets destination path. 
	    cssFolderName: 'css', // Name of the folder where put css file in asset folder.
	    cssFileName: 'style.css',
        libFolderName: 'scripts',
        libFileName: 'lib.js',
        jsFolderName: 'scripts',
        jsFileName: 'app.js',
        imagesFolderName: 'images',
	    viewsFolderName: '',
        fontsFolderName: 'fonts',
        fontIconFontName: 'fonticon',
        fontIconType: 'scss', // css, less or scss
        fontIconFolderName: './src/assets/fonts/',
        fontIconFontPath: 'fonts/',
        fontIconFileName: '../less/common/_fonticon.less'
	}
};
