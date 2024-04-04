const { withProjectBuildGradle } = require("@expo/config-plugins");

const myConfigPlugin = (config) => {
  return withProjectBuildGradle(config, (config) => {
    // Define the custom property to add
    const extPropertiesList = {
      clientId: "velocity",
      hyperSDKVersion: "2.1.13",
    };
    // ('customProperty = "customValue"');
    const strToAdd = Object.entries(extPropertiesList)
      .map(([key, value]) => `\n\t\t${key} = "${value}"`)
      .join("");
    console.log({ strToAdd });
    // Append the custom property to the `ext` block
    config.modResults.contents = config.modResults.contents
      .replace(/(ext\s*{\s*[\s\S]*?)(\s*})/, (match, p1, p2) => {
        return p1 + `\n\t\t` + strToAdd + "\n" + p2;
      })
      .replace(
        /(allprojects\s*{\s*repositories\s*{[\s\S]*?\n\s*})/,
        (match, p1) => {
          // Add the new line before the closing bracket of the repositories block
          return (
            p1.trim() +
            '\n\t\tmaven { url "https://maven.juspay.in/jp-build-packages/hyper-sdk/" }'
          );
        }
      );

    return config;
  });
};

module.exports = myConfigPlugin;
