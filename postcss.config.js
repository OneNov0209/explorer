module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'backdrop-filter': true,
        'css-nesting': true
      }
    },
    ...(process.env.NODE_ENV === 'production' ? { 
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          reduceTransforms: false
        }]
      } 
    } : {})
  }
}
