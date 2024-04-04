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
};

export default () => {
  return {
    expo: config,
  };
};
