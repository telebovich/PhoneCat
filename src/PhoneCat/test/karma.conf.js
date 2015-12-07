module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'wwwroot/lib/angular/angular.js',
      'wwwroot/lib/angular-route/angular-route.js',
      'wwwroot/lib/angular-resource/angular-resource.js',
      'wwwroot/lib/angular-animate/angular-animate.js',
      'wwwroot/lib/angular-mocks/angular-mocks.js',
      'wwwroot/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};