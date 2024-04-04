import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "my-appp",
  slug: "my-appp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.satyamvelocity.myappp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.satyamvelocity.myappp",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "./modifyResStrings.plugin.js",
    "./modifyManifest.js",
    // "./my-config.plugin.js",
    // "./modify_app_gradle.plugin.js",
    [
      "@config-plugins/react-native-branch",
      {
        apiKey: "key_live_iBdFjXrZuWkAhKiYM3FmHkiaqsnti3Ia",
        iosAppDomain: "velocitypayments.app.link",
      },
    ],
  ],
  updates: {
    url: "https://u.expo.dev/4c0a5632-3bb1-4f93-8b6e-4735f140584d",
    enabled: true,
  },
};

export default () => {
  return {
    expo: config,
  };
};
