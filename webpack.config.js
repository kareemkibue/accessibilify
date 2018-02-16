const webpack = require( 'webpack' );

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "./demo/accessibilify.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    devServer: {
        contentBase: __dirname + "/demo",
        port: 1010,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
                }
            ]
    },
    externals: {}
};