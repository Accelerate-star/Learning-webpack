const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("最终版权归黄依依所有!"),
    new HtmlWebpackPlugin({
      template: "index.html"
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test:/\.(jpg|png|gif)$/,
        type:"asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 1000 * 1024, // 25kb
          }
        },
        generator:{ 
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename:'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath:'./'
        }
      },
      {
        test:/\.html$/,
        loader:'html-loader',
      },
      {
        test: /\.js$/, exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        [require("@babel/plugin-transform-runtime"), { "legacy": true }],
                        [require("@babel/plugin-proposal-class-properties"), { "legacy": true }]
                    ]
                }
            }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  //服务器的配置
  devServer:{
    //服务器访问的文件地址
    static: {
      directory: path.join(__dirname, 'dist')
    },
    //服务器的IP地址
    host: 'localhost',
    //端口号
    // port: 3000,
    //自动打开
    open: true,
    //热更新
    hot: true,
  },
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 50000000,
    // 生成文件的最大体积
    maxAssetSize: 30000000,
    // 只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  }
}