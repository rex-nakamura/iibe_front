const paths = require('./paths');
const baseFontSize = 16; //-  rem計算用
const spDesignWidth = 375; //-  vw計算用
const pcDesignWidth = 1366; //-  vw風にpc計算する用

const spDesignHeight = 736; //-  vh計算用

module.exports = (ctx) => ({
  map:
    ctx.env === 'development'
      ? {
          inline: true
        }
      : false,
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')(),
    require('stylelint')(),
    require('postcss-normalize')(),
    require('postcss-for'),
    require('postcss-flexbugs-fixes')(),
    require('postcss-extend-rule')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-simple-vars')(),
    require('postcss-custom-media')(),
    require('postcss-gradient-transparency-fix')(),
    require('postcss-center')(),
    require('postcss-functions')({
      functions: {
        rem: function (num) {
          return `${num / baseFontSize}rem`;
        },
        pw: function (num) {
          return `calc( var(--vw) * ${(num / pcDesignWidth) * 100} )`;
        },
        vw: function (num) {
          return `${(num / spDesignWidth) * 100}vw`;
        },
        vh: function (num) {
          return `calc( var(--vh) * ${num} )`;
        },
        vhNum: function (num) {
          return `calc( var(--vh) * ${(num / spDesignHeight) * 100} )`;
        }
      }
    }),
    require('postcss-will-change-transition')(),
    require('css-mqpacker')(),
    require('css-declaration-sorter')({
      order: 'smacss'
    }),
    require('autoprefixer')({
      flexbox: true,
      grid: true
    }),
    require('postcss-cachebuster')({
      type: 'checksum',
      imagesPath: `${paths.appDest}`
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ].concat(ctx.env === 'development' ? [] : [require('csswring')()])
});
