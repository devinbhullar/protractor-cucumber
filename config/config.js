var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


//protractor.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 6000,
  allScriptsTimeout: 5000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature',
  ],


  baseURL: 'http://localhost:8080/',
   resultJsonOutputFile: './reports/json/protractor_report.json',
  onPrepare: function () {

          browser.manage().window().maximize();
          global.expect = chai.expect;
      },

  cucumberOpts: {
    //require: 'features/step_definitions/*.steps.js',
    require: [
        'features/step_definitions/*.js',
        'features/support/hook.js',
        'features/support/env.js',
        //'features/support/hookhtml.js'

    ],

    format: ['json:reports/cucumber-test-results.json', 'pretty'],
    tags: '@ProtractorScenario',
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};