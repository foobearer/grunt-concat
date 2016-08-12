//Tasks to run
module.exports = function(grunt) {

//function for speak task
grunt.registerTask('speak', function() {
	//code to be executed when grunt speak is called
	console.log("hello, I'm Speaking!");
});

grunt.registerTask('dance', function() {
	console.log("hello, I'm dancing");
});
//when executing more than one tasks
grunt.registerTask('both', ['speak', 'dance']);
};