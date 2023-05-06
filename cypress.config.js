const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  // watchForFileChanges:false,
  defaultCommandTimeout:5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
