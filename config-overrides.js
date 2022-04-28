const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins([
      "@emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        'sourceMap': true,
        'autoLabel': 'always',
        'labelFormat': '[filename]--[local]',
        'cssPropOptimization': true
      }
    ]
  )
);
