
import blockchain from '../../../lib/blockchain';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const CardROI = ({ coin }) => {
  const mncoins = blockchain.mncoins;
  const mns = coin.mnsOff + coin.mnsOn;
  const subsidy = blockchain.getMNSubsidy(coin.blocks, mns, coin.supply);
  const roi = blockchain.getROI(subsidy, coin.mnsOn);

  return (
    <Card title="Observer Information and Metrics">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          Active/Total Masternodes
        </div>
        <div className="col-sm-12 col-md-3">
          { coin.mnsOn } / { mns }
        </div>
        <div className="col-sm-12 col-md-6">
          Estimated ROI
        </div>
        <div className="col-sm-12 col-md-3">
          { numeral(roi).format('0,0.0000') }%
        </div>
        <div className="col-sm-12 col-md-6">
          Coin Supply (Total)
        </div>
        <div className="col-sm-12 col-md-6">
          { numeral(coin.supply ? coin.supply : 0.0).format('0,0.0000') }
        </div>
        <div className="col-sm-12 col-md-6">
          Market Cap BTC
        </div>
        <div className="col-sm-12 col-md-6">
          { numeral(coin.cap * coin.btc).format('0,0.0000') } BTC
        </div>
        <div className="col-sm-12 col-md-6">
          Market Cap USD
        </div>
        <div className="col-sm-12 col-md-6">
          { numeral(coin.cap).format('$0,0.00') }
        </div>
        <div className="col-sm-12 col-md-6">
          Coins Locked 
        </div>
        <div className="col-sm-12 col-md-6">
          { numeral(mns * mncoins).format('0,0.0000') } OBSR
        </div>
        <div className="col-sm-12 col-md-6">
          Masternode Worth
        </div>
        <div className="col-sm-12 col-md-6">
          { numeral(mncoins * coin.btc).format('0,0.0000') } BTC / { numeral(mncoins * coin.usd).format('$0,0.00') }
        </div>
      </div>
    </Card>
  );
};

CardROI.propTypes = {
  coin: PropTypes.object.isRequired
};

export default CardROI;
