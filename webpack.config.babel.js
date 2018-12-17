import webpack from 'webpack'
import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import alias from './module.alias'

const resolve = {
  modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  extensions: ['.js', '.jsx', '.json', '.less', '.css'],
  alias
}

const mode = process.env.NODE_ENV || 'development'

const either = (dev, prod) => mode === 'production' ? prod : dev

const entry = path.resolve(__dirname, `./src/index.jsx`)

const rules = [
  {
    enforce: 'pre',
    test: /.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {fix: true}
  },
  {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|gif|svg|ttf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  }
]

const devtool = either('cheap-module-eval-source-map', 'source-map')

const output = {
  filename: 'bundle.[hash:8].js',
  publicPath: '/',
  path: path.resolve(__dirname, 'dist')
}

const commonPlugins = [
  new webpack.ContextReplacementPlugin(
    /moment[\/\\]locale$/,
    /id/
  ),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(process.cwd(), `src/static/index.html`)
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
  })
]

const devPlugins = [
  new webpack.HotModuleReplacementPlugin({quiet: true}),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

const buildPlugins = [
  new UglifyJsPlugin({
    sourceMap: true,
    parallel: true
  })
]

const plugins = commonPlugins.concat(either(devPlugins, buildPlugins))

const devServer = {
  hot: true,
  port: 8080,
  host: '0.0.0.0',
  compress: true,
  historyApiFallback: true
}

export default {
  mode,
  entry,
  module: {rules},
  resolve,
  devtool,
  output,
  plugins,
  devServer
}
