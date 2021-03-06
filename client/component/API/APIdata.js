const APIdata = [
  {    
    heading: 'API Calls',
    subHeading: 'Return data from coind',
    calls: [
        {
          name: 'getAddress [hash]',
          info: 'Returns information for given address.',
          path: '/api/address/oUmz3ncnXGdEafaVbG16J9ak4vNjBAfuSJ'
        },
        {
          name: 'getBlock [hash] [height]',
          info: 'Returns block information for the given hash or height.',
          path: '/api/block/0000007ad4bb62d97a626d7179df1dfdbc0ea96687865f5000efab0ffeb0185f'
        },
        {
          name: 'getBlockAverage',
          info: 'Returns the average block time over 24 hours.',
          path: '/api/block/average'
        },
        {
          name: 'getCoin',
          info: 'Returns coin information.',
          path: '/api/coin'
        },
        {
          name: 'getCoinHistory',
          info: 'Returns the coin history.',
          path: '/api/coin/history'
        },
        {
          name: 'getMasternodes',
          info: 'Returns masternode information.',
          path: '/api/masternode'
        },
        {
          name: 'getMasternodeByAddress',
          info: 'Returns masternode information by Wallet Address.',
          path: '/api/masternode/OU3nYpsPofS1wPwg6w2pTaKaRuvvkbxCxR'
        },
        {
          name: 'getMasternodeCount',
          info: 'Returns masternodes enabled and total counts.',
          path: '/api/masternodecount'
        },
        {
          name: 'getMasternodeAverage',
          info: 'Returns the average payment for a masternode vs 24 hours.',
          path: '/api/masternode/average'
        },
        {
          name: 'getPeer',
          info: 'Returns peer information.',
          path: '/api/peer'
        },
        {
          name: 'getSupply',
          info: 'Returns circulating and total supply information.',
          path: '/api/supply'
        },
        {
          name: 'getTXs',
          info: 'Returns transaction information.',
          path: '/api/tx'
        },
        {
          name: 'getTXLatest',
          info: 'Returns latest transaction information.',
          path: '/api/tx/latest'
        },
        {
          name: 'getTX [hash]',
          info: 'Returns information for the given transaction.',
          path: '/api/tx/e51231594e4a84aa98bbdc234811f991fb41acc51aa83759196d5bbea8ab6a81'
        },
        {
          name: 'getDifficulty',
          info: 'Returns the current difficulty.',
          path: '/api/getdifficulty'
        },
        {
          name: 'getConnectionCount',
          info: 'Returns the number of connections the block explorer has to other nodes.',
          path: '/api/getconnectioncount'
        },
        {
          name: 'getBlockCount',
          info: 'Returns the current block index.',
          path: '/api/getblockcount'
        },
        {
          name: 'getNetworkHashPS',
          info: 'Returns the current network hashrate. (hash/s)',
          path: '/api/getnetworkhashps'
        },
    ]
  },
  {
    heading: 'Extended API',
    subHeading: 'Return data from local indexes',
    calls: [
        {
          name: 'getMoneySupply',
          info: 'Returns the current money supply.',
          path: '/ext/getmoneysupply'
        },
        // { name: 'getdistribution',
        //   info: 'Returns the number of connections the block explorer has to other nodes.',
        //   path: '/ext/getdistribution'
        // },
        {
          name: 'getAddress',
          info: 'Returns address information.',
          path: '/ext/getaddress'
        },
        {
          name: 'getBalance',
          info: 'Returns the current balance.',
          path: '/ext/getbalance'
        },
        {
          name: 'getLastTXs',
          info: 'Returns the last transactions.',
          path: '/ext/getlasttxs'
        }
    ]
  },
  {
    heading: 'Linking (GET)',
    subHeading: 'Linking to the block explorer',
    calls: [
        {
          name: 'Transaction (/#/tx/[hash])',
          info: 'Returns transaction information',
          path: '/#/tx/e51231594e4a84aa98bbdc234811f991fb41acc51aa83759196d5bbea8ab6a81'
        },
        {
          name: 'Block (/#/block/[hash|height]',
          info: 'Returns block information.',
          path: '/#/block/0000007ad4bb62d97a626d7179df1dfdbc0ea96687865f5000efab0ffeb0185f'
        },
        {
          name: 'Address (/#/address/[hash]',
          info: 'Returns address information.',
          path: '/#/address/oUmz3ncnXGdEafaVbG16J9ak4vNjBAfuSJ'
        },
        // { name: 'qr (qr/[hash]',
        //   info: 'Returns qr code information.',
        //   path: '/#/qr/000000000001eb792fe1ac3f901d2373509769f5179d9fe2fd3bf8cb3b6ebec9'
        // },
    ]
  }
]

export default APIdata;
