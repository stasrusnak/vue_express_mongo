const path = require('path');


module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'vue-express-mongo-737izh4uh-stasrusnak.vercel.app'
      }
    }
  }
};
