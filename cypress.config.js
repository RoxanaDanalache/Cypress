const { defineConfig } = require('cypress')


module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {
     nonGlobalStepDefinitions: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

    specPattern: 'cypress/e2e/**/*.feature',

    supportFile:false 
  },
})