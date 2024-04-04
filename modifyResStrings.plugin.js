const { withStringsXml } = require("@expo/config-plugins");

const data = {
  facebook_app_id: "910210910048865",
  fb_login_protocol_scheme: "fb910210910048865",
  facebook_client_token: "df9c639fef7c1dae4f03ebf82b720747",
  truecaller_client_token: "nqjbnuxhuqpmb2sy1_kwdicie8zcsvtpustnk739p9y",
};

const myConfigPlugin = (config) => {
  return withStringsXml(config, (config) => {
    Object.entries(data).forEach(([key, value]) => {
      config.modResults.resources.string.push({
        $: { name: key },
        _: value,
      });
    });
    return config;
  });
};

module.exports = myConfigPlugin;
