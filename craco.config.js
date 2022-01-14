const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#5e086d',
              '@drawer-bg': '#f1f2f6',
              '@collapse-panel-border-radius': '2px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};