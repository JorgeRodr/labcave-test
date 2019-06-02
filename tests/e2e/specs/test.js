// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".list")
      .assert.elementPresent("input")
      .setValue("input", "Star Wars")
      .keys(browser.Keys.ENTER)
      .waitForElementVisible(".card", 5000)
      .assert.elementPresent(".card")
      .end();
  }
};
