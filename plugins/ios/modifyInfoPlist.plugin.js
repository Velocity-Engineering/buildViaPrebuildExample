const { withInfoPlist } = require("@expo/config-plugins");

const data = {
  FacebookAdvertiserIDCollectionEnabled: false,
  FacebookAdvertiserTrackingEnabled: true,
  FacebookAppID: "910210910048865",
  FacebookAutoInitEnabled: false,
  FacebookAutoLogAppEventsEnabled: true,
  FacebookClientToken: "df9c639fef7c1dae4f03ebf82b720747",
  FacebookDisplayName: "VelocityPay",
  FirebaseDynamicLinksCustomDomains: [
    "https://custom.domain.io/bla",
    "https://custom.domain.io/bla2",
  ],
  ITSAppUsesNonExemptEncryption: false,
  LSApplicationQueriesSchemes: [
    "com.velocity.electrum.prod",
    "whatsapp",
    "credpay",
    "phonepe",
    "paytmmp",
    "tez",
    "paytm",
    "bhim",
    "devtools",
    "myairtel",
    "truesdk",
    "fbapi",
    "fb-messenger-share-api",
    "slice-upi",
  ],
  SKAdNetworkItems: [
    { SKAdNetworkIdentifier: "v9wttpbfk9.skadnetwork" },
    { SKAdNetworkIdentifier: "n38lu8286q.skadnetwork" },
  ],
  branch_universal_link_domains: [
    "velocitypayments.app.link",
    "velocitypayments-alternate.app.link",
    "velocitypayments.test-app.link",
    "velocitypayments-alternate.test-app.link",
  ],
};

const permissionList = {
  NSBluetoothAlwaysUsageDescription:
    "Our app does not request this permission or utilize this functionality but it is included in our info.plist since our app utilizes the react-native-permissions library, which references this permission in its code.",
  NSCameraUsageDescription: "Allow $(PRODUCT_NAME) to access your camera",
  NSContactsUsageDescription:
    "We need access to your contacts to assist you in effortlessly sharing payment and referral links with your friends, colleagues, and customers.",
  NSFaceIDUsageDescription: "Allow $(PRODUCT_NAME) to use FaceID",
  NSLocationAlwaysAndWhenInUseUsageDescription:
    "We need access to your location to provide you with specific payment services based on your current location.",
  NSLocationWhenInUseUsageDescription:
    "We need access to your location to provide you with specific payment services based on your current location.",
  NSMicrophoneUsageDescription:
    "Allow $(PRODUCT_NAME) to access your microphone",
  NSPhotoLibraryUsageDescription: "Allow $(PRODUCT_NAME) to access your photos",
  NSUserTrackingUsageDescription:
    "With your consent, we can measure the performance of our ad campaigns accurately and make informed decisions to optimize our offerings. Your data is confidential and used only to improve our services. Thank you for your trust.",
};

const myConfigPlugin = (config) => {
  return withInfoPlist(config, (config) => {
    Object.entries(data).forEach(([key, value]) => {
      if (config.modResults[key]) {
        config.modResults[key] = [...config.modResults[key], value];
      } else {
        config.modResults[key] = value;
      }
    });

    Object.entries(permissionList).forEach(([key, value]) => {
      config.modResults[key] = value;
    });

    return config;
  });
};

module.exports = myConfigPlugin;
