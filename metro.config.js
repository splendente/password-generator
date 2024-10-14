const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = withStorybook(defaultConfig, { input: '../assets/css/global.css' });
module.exports = withNativeWind(defaultConfig, module.exports);
