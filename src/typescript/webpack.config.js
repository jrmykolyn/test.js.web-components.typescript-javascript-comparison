const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const MODES = [PRODUCTION, DEVELOPMENT];

module.exports = {
  mode: MODES.includes(process.env.NODE_ENV) ? process.env.NODE_ENV : DEVELOPMENT,
  entry: `${__dirname}/dist`,
  output: {
    filename: process.env.NODE_ENV === PRODUCTION ? 'bundle.min.js' : 'bundle.js',
    path: `${__dirname}/dist`,
  },
  module: {},
  plugins: [],
};
