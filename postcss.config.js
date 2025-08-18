module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      features: {
        'backdrop-filter': true,
        'css-nesting': true
      }
    }),
    process.env.NODE_ENV === 'production' && require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        reduceTransforms: false
      }]
    })
  ].filter(Boolean)
}
