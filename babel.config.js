module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@shared': './src/shared',
            '@constants': './src/constants',
            '@types': './src/shared/types',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
