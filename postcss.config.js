// const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // pxtorem({
    //   rootValue: 100,
    //   propList: ['*'],
    //   minPixelValue: 1.001
    // }),
    autoprefixer({})
  ]
};
