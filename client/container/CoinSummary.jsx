
import Actions from '../core/Actions';
import Component from '../core/Component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../component/Icon';

import CardMarket from '../component/Card/CardMarket';
import CardMasternodeSummary from '../component/Card/CardMasternodeSummary';
import CardNetworkSummary from '../component/Card/CardNetworkSummary';
import CardPoS from '../component/Card/CardPoS';
import CardStatus from '../component/Card/CardStatus';
import WatchList from '../component/WatchList';

class CoinSummary extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    searches: PropTypes.array.isRequired,
    // State
    coins: PropTypes.array.isRequired,
    txs: PropTypes.array.isRequired,
  };

  render() {
    const coin = this.props.coins && this.props.coins.length
      ? this.props.coins[0]
      : { diff: 0, netHash: 0 };

    const height = this.props.txs.length
      ? this.props.txs[0].blockHeight
      : coin.blocks;

    const watchlist = height >= 182700
      ? this.props.searches
      : this.props.searches.slice(0, 7);

    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <CardStatus
                  avgBlockTime={ coin.avgBlockTime?coin.avgBlockTime:0 }
                  avgMNTime={ coin.avgMNTime?coin.avgMNTime:0 }
                  blocks={ height }
                  peers={ coin.peers }
                  status={ coin.status } />
              </div>
              <div className="col-md-12 col-lg-6">
                <CardNetworkSummary
                  difficulty={ coin.diff }
                  hashps={ coin.netHash }
                  xAxis={ this.props.coins.map(c => c.createdAt) }
                  yAxis={ this.props.coins.map(c => c.diff ? c.diff : 0.0) } />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <CardMarket
                  btc={ coin.btc }
                  usd={ coin.usd }
                  xAxis={ this.props.coins.map(c => c.createdAt) }
                  yAxis={ this.props.coins.map(c => c.usd ? c.usd : 0.0) } />
              </div>
              <div className="col-md-12 col-lg-6">
                <CardMasternodeSummary
                  offline={ coin.mnsOff }
                  online={ coin.mnsOn }
                  xAxis={ this.props.coins.map(c => c.createdAt) }
                  yAxis={ this.props.coins.map(c => c.mnsOn ? c.mnsOn : 0.0) } />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <CardPoS
              average={ coin.avgBlockTime?coin.avgBlockTime:0 }
              height={ height }
              posHeight={ 182700 } />
            <WatchList
              items={ watchlist }
              onSearch={ this.props.onSearch }
              onRemove={ this.props.onRemove } />
          </div>
        </div>
      </div>
    );
  };
}

const mapState = state => ({
  coins: state.coins,
  txs: state.txs
});

export default connect(mapState)(CoinSummary);
