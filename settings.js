const config = {}

switch (process.env.NODE_ENV) {
  case 'production':
    config.API_URL = 'https://api.findfit.com/api'
    break

  case 'uat':
    config.API_URL = 'https://api-uat.findfit.com/api'
    break

  default:
    config.API_URL = 'http://api.findfit.godnoob.com/api'
    break
}

export default {
  /**
   * See http://api.findfit.godnoob.com/document
   */
  ...config,
}
