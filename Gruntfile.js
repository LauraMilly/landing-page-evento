module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'src/css/style.css': 'src/scss/styles.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
};
