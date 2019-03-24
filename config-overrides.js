const { override, fixBabelImports, addLessLoader } = require('customize-cra');


// module.exports = function override(config, env) {
// fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true,
// }),
// config = addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { 
//         '@primary-color': '#3d0320' 
//     },
// }),
// }

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = addLessLoader({
            modifyVars: { "@primary-color": "#1DA57A" },
        })(config, env);
    
            return config;
        
};