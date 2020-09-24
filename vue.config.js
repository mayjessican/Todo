module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Todo/'
    : '/'
}

// this file should be in the root directory, not in public folder