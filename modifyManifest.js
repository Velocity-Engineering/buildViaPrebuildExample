const { withAndroidManifest } = require("@expo/config-plugins");
const { facebookActivityList } = require("./facebookActivityList");
const { mainActivityIntent } = require("./mainActivityIntents");
const permsissionList = [
  "com.google.android.gms.permission.AD_ID",
  "android.permission.POST_NOTIFICATIONS",
  "android.permission.RECEIVE_SMS",
  "android.permission.READ_SMS",
  "android.permission.READ_CONTACTS",
  "android.permission.ACCESS_FINE_LOCATION",
];

const contactQuery = {
  intent: [
    {
      action: [
        {
          $: {
            "android:name": "android.intent.action.VIEW",
          },
        },
      ],
      category: [
        {
          $: {
            "android:name": "android.intent.category.DEFAULT",
          },
        },
      ],
      data: [
        {
          $: {
            "android:mimeType": "vnd.android.cursor.dir/contact",
          },
        },
      ],
    },
  ],
};

const applicationProperties = {
  "android:networkSecurityConfig": "@xml/network_security_config",
  "tools:replace": "android:networkSecurityConfig",
};

const applicationMetaDataValues = {
  "com.facebook.sdk.ApplicationId": "@string/facebook_app_id",
  "com.facebook.sdk.ClientToken": "@string/facebook_client_token",
  "com.truecaller.android.sdk.ClientId": "@string/truecaller_client_token",
};

const myConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults.manifest;
    manifest["uses-sdk"] = {
      $: { "tools:overrideLibrary": "com.truecaller.android.sdk" },
    };
    permsissionList.forEach((permission) => {
      manifest["uses-permission"].push({
        $: { "android:name": permission },
      });
    });
    const applicationTag = manifest.application[0]["$"];
    const applicationMetaData = manifest.application[0]["meta-data"];
    manifest.application[0].activity[0]["intent-filter"] = mainActivityIntent;
    manifest.application[0].activity[0]["$"]["android:label"] =
      "@string/app_name";
    Object.entries(applicationProperties).forEach(([key, value]) => {
      applicationTag[key] = value;
    });
    Object.entries(applicationMetaDataValues).forEach(([key, value]) => {
      applicationMetaData.push({
        $: {
          "android:name": key,
          "android:value": value,
        },
      });
    });
    manifest.queries.push(contactQuery);
    manifest.application.push(...facebookActivityList);
    return config;
  });
};

module.exports = myConfigPlugin;
