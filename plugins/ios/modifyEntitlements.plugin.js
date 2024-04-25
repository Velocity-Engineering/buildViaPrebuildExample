const { withEntitlementsPlist } = require("@expo/config-plugins");

const data = {
  "com.apple.developer.associated-domains": [
    "applinks:electrum.page.link",
    "applinks:velocitypayments.app.link",
    "applinks:velocitypayments-alternate.app.link",
    "applinks:velocitypayments.test-app.link",
    "applinks:velocitypayments-alternate.test-app.link",
    "applinks:sib8bf0db04e9c4bc29709307c541ca037.truecallerdevs.com",
  ],
  "keychain-access-groups": [],
};

const myConfigPlugin = (config) => {
  return withEntitlementsPlist(config, (config) => {
    Object.entries(data).forEach(([key, value]) => {
      if (config.modResults[key]) {
        config.modResults[key] = [...config.modResults[key], value];
      } else {
        config.modResults[key] = value;
      }
    });
    return config;
  });
};

module.exports = myConfigPlugin;
