const { withAppBuildGradle } = require("@expo/config-plugins");

const depenedencies = [
  "com.facebook.android:facebook-android-sdk:[8,9)",
  "fileTree(includes: ['*.aar'], dir: 'upiFiles/prod/libs')",
];

const myConfigPlugin = (config) => {
  return withAppBuildGradle(config, (config) => {
    // Define the custom property to add
    ('custopapmProperty = "customValue"');
    const strToAdd = depenedencies
      .map(
        (el) =>
          `\n\timplementation = ${el.startsWith("fileTree") ? el : `"${el}"`}`
      )
      .join("");
    console.log({ strToAdd });
    // Append the custom property to the `ext` block
    config.modResults.contents = config.modResults.contents.replace(
      /(dependencies\s*{)/,
      (match, p1, p2) => {
        return p1 + `\n\t\t` + strToAdd + "\n";
      }
    );
    return config;
  });
};

module.exports = myConfigPlugin;
