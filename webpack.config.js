const webpack = require( 'webpack' );

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "accessibilify.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    devServer: {
        contentBase: __dirname + "/",
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