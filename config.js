
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://explorer.slate.io',
    'port': '8087',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'slate'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'slatex',
    'user': 'slate',
    'pass': 'slate'
  },
  'freegeoip': {
    'api': 'http://geoip.nekudo.com/api/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '37414',
    'user': 'slate',
    'pass': 'this',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
