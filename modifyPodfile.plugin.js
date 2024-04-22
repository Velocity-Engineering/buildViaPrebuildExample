const someName =
  "pod 'FBSDKCoreKit', '~> 9.0.0'\npod 'FBSDKLoginKit', '~> 9.0.0'\npod 'FBSDKShareKit', '~> 9.0.0'\npod 'FBAudienceNetwork'\npod 'TrueSDK'\n\nuse_frameworks! :linkage => :static\n  \n$RNFirebaseAsStaticFramework = true";

const someOtherName =
  "# HyperSDK code start \nfuse_path = \"./Pods/HyperSDK/Fuse.rb\"\nclean_assets = false # Pass true to re-download all the assets\nif File.exist?(fuse_path)\nif system(\"ruby\", fuse_path.to_s, clean_assets.to_s)\nend\nend\ninstaller.pods_project.targets.each do |t|\nt.build_configurations.each do |config|\nconfig.build_settings['ONLY_ACTIVE_ARCH'] = 'NO'\nend\nend\n# HyperSDK code end";

const { withDangerousMod, withPlugins } = require("@expo/config-plugins");
const {
  mergeContents,
} = require("@expo/config-plugins/build/utils/generateCode");
const fs = require("fs");
const path = require("path");

async function readFileAsync(path) {
  return fs.promises.readFile(path, "utf8");
}

async function saveFileAsync(path, content) {
  return fs.promises.writeFile(path, content, "utf8");
}

function addExtraLines(tag, src, newSrc, anchor, offset) {
  return mergeContents({
    tag,
    src,
    newSrc,
    anchor,
    offset,
    comment: "#",
  }).contents;
}

const myConfigPlugin = (c) => {
  return withDangerousMod(c, [
    "ios",
    async (config) => {
      const file = path.join(config.modRequest.platformProjectRoot, "Podfile");
      let contents = await readFileAsync(file);

      contents = addExtraLines(
        "add pods",
        contents,
        someName,
        /config = use_native_modules!/,
        1
      );

      contents = addExtraLines(
        "add hypersdk script",
        contents,
        someOtherName,
        /:mac_catalyst_enabled => false/,
        2
      );
      await saveFileAsync(file, contents);
      return config;
    },
  ]);
};

function disableAdIDSupport(src) {
  return mergeContents({
    tag: `rn-firebase-disable-ad-id-support`,
    src,
    newSrc: "$RNFirebaseAnalyticsWithoutAdIdSupport = true",
    anchor: /platform :ios/,
    offset: 0,
    comment: "#",
  }).contents;
}

module.exports = (config) => withPlugins(config, [myConfigPlugin]);
