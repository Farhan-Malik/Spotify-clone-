module.exports = {
    entry: {
       app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      // ... other config omitted
    },
    plugins: [
      // Enable the plugin
      new webpack.HotModuleReplacementPlugin(),
    ],
  }