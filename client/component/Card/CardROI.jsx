
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
    <Card>
      <div className="mb-2 border-bottom">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Active/Total Masternodes
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { coin.mnsOn } / { mns }
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Estimated ROI
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(roi).format('0,0.0000') }%
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Coin Supply (Total)
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(coin.supply ? coin.supply : 0.0).format('0,0.0000') } OBSR
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Market Cap BTC
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(coin.cap * coin.btc).format('0,0.0000') } BTC
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Market Cap USD
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(coin.cap).format('$0,0.00') }
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Coins Locked
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(mns * mncoins).format('0,0.0000') } OBSR
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h5">
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'left' }}>
            Masternode Worth
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            { numeral(mncoins * coin.btc).format('0,0.0000') } BTC / { numeral(mncoins * coin.usd).format('$0,0.00') }
          </div>
        </div>
      </div>
    </Card>
  );
};

CardROI.propTypes = {
  coin: PropTypes.object.isRequired
};

export default CardROI;
