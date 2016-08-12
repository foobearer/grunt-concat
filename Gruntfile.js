//Tasks to run
module.exports = function(grunt) {
//function for speak task
grunt.registerTask('speak', function() {
	//code to be executed when grunt speak command is called
	console.log("hello, I'm Speaking!");
});
grunt.registerTask('dance', function() {
	console.log("hello, I'm dancing");
});
//when executing more than one tasks
grunt.registerTask('both', ['speak', 'dance']);
//default task will run by just executing grunt command
grunt.registerTask('default', ['speak'])

//Project Configuration for concatinating files
grunt.initConfig({
  concat: {
    js: {
      src: ['js/module1.js', 'js/module2.js'],
      dest: 'dist/js/scripts.js',
    },
    css: {
    	src: ['css/style1.css', 'css/style2.css'],
      dest: 'dist/css/styles.js',
    }
  },
  watch: {
	  js: {
	    files: ['js/**/*.js'],
	    tasks: ['concat'],
	  },
	  css: {
	    files: ['css/**/*.css'],
	    tasks: ['concat'],
	  }
},
});

grunt.loadNpmTasks('grunt-contrib-concat'); //grunt concat
grunt.loadNpmTasks('grunt-contrib-watch'); //grunt watch

};