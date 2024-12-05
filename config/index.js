const env = () => {
  return process.env.NODE_ENV === 'production' ? { endpoint: '/prod/v1', port: 4500 } :
    { endpoint: '/dev/v1', port: 7800 }
}

module.exports = {
  ...env()
}