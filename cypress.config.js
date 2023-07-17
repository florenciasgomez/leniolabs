const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler());
    },
    specPattern: "cypress/e2e/**/*.test.{js,jsx,ts,feature}",
    baseUrl: 'https://www.saucedemo.com/v1/',
  },
});





