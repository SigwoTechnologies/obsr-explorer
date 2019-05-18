
import Component from '../core/Component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import CardEarnings from '../component/Card/CardEarnings';
import CardExchanges from '../component/Card/CardExchanges';
import CardLinks from '../component/Card/CardLinks';
import CardROI from '../component/Card/CardROI';
import HorizontalRule from '../component/HorizontalRule';

class CoinInfo extends Component {
  static propTypes = {
    coin: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <HorizontalRule title="Coin Info" />
          <div className="row">
            <div className="col-md-6">
              {/* <CardStatus
                avgBlockTime={ coin.avgBlockTime?coin.avgBlockTime:0 }
                avgMNTime={ coin.avgMNTime?coin.avgMNTime:0 }
                blocks={ height }
                peers={ coin.peers }
                status={ coin.status }
                supply={ coin.supply }  /> */}
            </div>
            <div className="col-md-6">
              {/* <CardMarket
                btc={ coin.btc }
                usd={ coin.usd }
                xAxis={ this.props.coins.map(c => c.createdAt) }
                yAxis={ this.props.coins.map(c => c.usd ? c.usd : 0.0) }
                /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* <CardNetworkSummary
                difficulty={ coin.diff }
                hashps={ coin.netHash }
                xAxis={ this.props.coins.map(c => c.createdAt) }
                yAxis={ this.props.coins.map(c => c.diff ? c.diff : 0.0) } /> */}
            </div>
            <div className="col-md-6">
              {/* <CardMasternodeSummary
                offline={ coin.mnsOff }
                online={ coin.mnsOn }
                xAxis={ this.props.coins.map(c => c.createdAt) }
                yAxis={ this.props.coins.map(c => c.mnsOn ? c.mnsOn : 0.0) } /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <CardROI coin={ this.props.coin } />
            </div>
            <div className="col-md-6">
              <CardEarnings coin={ this.props.coin } />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-3">
                  <CardLinks />
                  <CardExchanges />
                </div>
                <div className="col-sm-12 col-md-9">
                  <CardEarnings coin={ this.props.coin } />
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className="row">
          <div className="col-md-12 col-lg-8">
            <div>
              <img className="img-fluid" src="/img/largelogo.svg" />
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <CardLinks />
                <CardExchanges />
              </div>
              <div className="col-sm-12 col-md-9">
                <CardEarnings coin={ this.props.coin } />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <CardROI coin={ this.props.coin } />
          </div>
        </div> */}
      </div>
    );
  };
}

const mapDispatch = dispatch => ({

});

const mapState = state => ({
  coin: state.coins.length ? state.coins[0] : {},
  txs: state.txs
});

export default connect(mapState, mapDispatch)(CoinInfo);
