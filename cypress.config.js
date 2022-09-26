const { defineConfig } = require('cypress');
const { default: cucumber } = require('cypress-cucumber-preprocessor');

module.exports = defineConfig({
    numTestsKeptInMemory: 10,
    env: {
        uncaughtCypressException: false,
        hideXhr: true,
    },
    chromeWebSecurity: false,
    retries: {
        runMode: 1,
        openMode: 0,
    },
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/integration/**/*.{feature,features}',
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
        },
        viewportWidth: 550,
        viewportHeight: 600
    },
});
