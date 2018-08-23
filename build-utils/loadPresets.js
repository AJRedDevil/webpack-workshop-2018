const webpackMerge = require('webpack-merge');

const applyPresets = (env) => {
  const {presets} = env;
  /**@type {string[]} */
  const mergePresets = [].concat(...[presets]);
  const mergedConfigs = mergePresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );
  console.log("mergedConfigs:", mergedConfigs);
  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;