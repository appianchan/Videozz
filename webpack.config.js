const path = require("path");

module.exports = {
    mode: "production",
    context: __dirname,
    entry: "./frontend/entry.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map"
};
