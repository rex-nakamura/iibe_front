const paths = require('./paths');
const TerserPlugin = require('terser-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const shouldUseSourceMap = false;

const colors = require('./npm_scripts/colors');

const noticeMessage = `
${colors.yellow}****************   ${colors.white}WATCH MODE${colors.yellow}   **********************${colors.red}
    process.env.NODE_ENV : development
    Don't forget ${colors.green}npm run build

    ${colors.yellowBg}${colors.black}【watchでのJSの書換を確認】${colors.reset}

    ${colors.red}アップロード/push前に必ず ${colors.green}npm run build${colors.red}
    を実行すること。
${colors.yellow}******************************************************${colors.reset}
`;

module.exports = (env) => {
  process.env.BABEL_ENV = env.NODE_ENV;
  process.env.NODE_ENV = env.NODE_ENV;
  return {
    mode: env.NODE_ENV,
    bail: false,
    devtool: env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    entry: {
      bundle: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        'whatwg-fetch',
        'intersection-observer',
        'picturefill',
        'gsap',
        './src/js/main.js'
      ]
    },
    output: {
      path: paths.appBuild,
      publicPath: '/' + paths.subDirectory,
      filename: `${paths.assetPath}/js/[name].js`,
      chunkFilename: `${paths.assetPath}/js/[name].js`
    },
    cache: true,
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              arrows: false
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: shouldUseSourceMap
        })
      ],
      splitChunks: {
        name: 'vendor',
        chunks: 'all'
      },
      runtimeChunk: 'single'
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint'),
                formatter: require('eslint/lib/cli-engine/formatters/stylish')
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          include: paths.appSrc
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: paths.assetPath + '/media/[name].[hash:8].[ext]'
              }
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: __dirname,
              exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
              use: [
                {
                  loader: require.resolve('babel-loader'),
                  options: {
                    customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                    cacheDirectory: true,
                    cacheCompression: true,
                    compact: true
                  }
                }
              ]
            },
            {
              test: /\.pug$/,
              exclude: /node_modules/,
              loader: 'pug-loader'
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: paths.assetPath + '/media/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
      new HardSourceWebpackPlugin(),
      new DuplicatePackageCheckerPlugin(),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: true
      }),
      new EventHooksPlugin({
        done: () => {
          if (process.env.NODE_ENV === 'production') return;
          console.log(noticeMessage);
        }
      })
    ],
    performance: false
  };
};
