module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-functions': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-at-rules-variables': {},
    'postcss-sort-media-queries': { sort: 'mobile-first' },
    'autoprefixer': { cascade: false, flexbox: 'no-2009' },
    'cssnano': { zindex: false, reduceIdents: false }
  }
};
