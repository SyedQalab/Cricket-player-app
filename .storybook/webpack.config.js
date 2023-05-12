const path = require('path');

module.exports = async ({ config, mode }) => {
  // Add support for CSS modules
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  return config;
};