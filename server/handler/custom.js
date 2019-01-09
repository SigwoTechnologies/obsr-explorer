const Coin = require('../../model/coin')
const config = require('../../config')
const TX = require('../../model/tx')
const { BigNumber } = require('bignumber.js')
const UTXO = require('../../model/utxo');
const { rpc } = require('../../lib/cron');

const getCustomSupply = async (req, res) => {
  try {
    const coin = await Coin.findOne().sort({ createdAt: -1 });

    res.json(coin.supply);
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || err);
  }
};

module.exports = {
  getCustomSupply
}
