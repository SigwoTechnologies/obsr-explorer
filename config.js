
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://127.0.0.1',
    'port': '8087',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'obsr'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'obsr',
    'user': 'obsrUser',
    'pass': 'obsrPass'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '9568',
    'user': 'testUser',
    'pass': 'testPass',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
