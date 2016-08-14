* grunt-contrib-concat (concatenante files)
  - npm install command
  ``` npm install grunt-contrib-concat --save-dev ```
  - Gruntfile.js
  ```javascript grunt.loadNpmTasks('grunt-contrib-concat'); ```
  - command to run the plugin 
  ``` npm concat ```
  - usage example
  ```javascript 
    // Project configuration. 
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
          dest: 'dist/built.js',
        },
      },
    });
    ```
* grunt-contrib-watch (Run predefined tasks whenever watched file patterns are added, changed or deleted)
  - npm install command
  ``` npm install grunt-contrib-watch --save-dev ```
  - Gruntfile.js
  ```javascript grunt.loadNpmTasks('grunt-contrib-watch'); ```
  - command to run the plugin 
  ``` grunt watch ```
  - usage example
  ```javascript 
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['generateFileManifest'],
        options: {
          event: ['added', 'deleted'],
        },
      },
    },
    ```
