module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          root: ['', '.'],
          alias: {
            '@components': './src/components',
            '@redux': './src/redux',
            '@styles': './src/styles',
            '@typescript': './src/typescript',
            '@utils': './src/utils',
            '@functions': './funcs',
          },
        },
      ],
    ],
  }
}
