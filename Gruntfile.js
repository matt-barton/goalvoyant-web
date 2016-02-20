module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    express: {
        options: {
          // Override defaults here
        },
        dev: {
          options: {
            script: 'src/server.js'
          }
        },
        prod: {
          options: {
            script: 'path/to/prod/server.js',
            node_env: 'production'
          }
        },
        test: {
          options: {
            script: 'path/to/test/server.js'
          }
        }
      },
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
      uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Tasks
  grunt.registerTask('server', [ 'express:dev', 'watch' ]);
  
};