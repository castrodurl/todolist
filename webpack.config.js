const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: "development",
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ],
    },
    plugins: [new HtmlWebPackPlugin({
        title: 'Mi Webpack App',
        //filename: 'index.html'
        template: './src/index.html'
    }), new MiniCssExtractPlugin(), 
    new CopyPlugin({
        patterns: [
          { from: "src/assets/", to: "assets/" },
        ],
      }),],
}
