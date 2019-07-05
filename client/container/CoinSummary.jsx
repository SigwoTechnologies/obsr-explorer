
import Actions from '../core/Actions';
import Component from '../core/Component';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../component/Icon';

import CardMarket from '../component/Card/CardMarket';
import CardMasternodeSummary from '../component/Card/CardMasternodeSummary';
import CardNetworkSummary from '../component/Card/CardNetworkSummary';
// import CardPoS from '../component/Card/CardPoS';
import CardTxPerDay from '../component/Card/CardTxPerDay';
import CardStatus from '../component/Card/CardStatus';
import WatchList from '../component/WatchList';

class CoinSummary extends Component {
  static propTypes = {
    // State
    coin: PropTypes.object.isRequired,
    // Dispatch
    getCoins: PropTypes.func.isRequired,
    getTXs: PropTypes.func.isRequired
    // onSearch: PropTypes.func.isRequired,
    // onRemove: PropTypes.func.isRequired,
    // searches: PropTypes.array.isRequired,
    // State
    // coins: PropTypes.array.isRequired,
    // txs: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      error: null,
      loading: true,
      txs: []
    };
  };

  componentDidMount() {
    Promise.all([
      this.props.getCoins(),
      this.props.getTXs()
    ])
    .then((res) => {
      this.setState({
        coins: res[0], // 7 days at 5 min = 2016 coins
        loading: false,
        txs: res[1]
      });
    })
    .catch(err => console.log(err));
  };

  render() {
    const coin = this.props.coins && this.props.coins.length
      ? this.props.coins[0]
      : { diff: 0, netHash: 0 };

    const height = this.props.txs.length
      ? this.props.txs[0].blockHeight
      : coin.blocks;

    if (this.props.searches) {
      const watchlist = height >= 182700
      ? this.props.searches
      : this.props.searches.slice(0, 7);
    }

    let tTX = 0;
    let avgTX = 0;
    let day = 0;
    if (this.state.txs) {
      this.state.txs.forEach((tx) => {
        tTX += tx.total;
      });
      avgTX = ((tTX / 7) / 24) / this.state.txs.length;
      day = (<small>{ moment().format('MMM DD') }</small>);
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            {/* <CardPoS
              average={4}
              height={5}
              posHeight={6}
            /> */}
            <CardStatus
              avgBlockTime={ coin.avgBlockTime?coin.avgBlockTime:0 }
              avgMNTime={ coin.avgMNTime?coin.avgMNTime:0 }
              blocks={ height }
              peers={ coin.peers }
              status={ coin.status }
              supply={ coin.supply }  />
          </div>
          <div className="col-md-12 col-lg-6">
            <CardMarket
              btc={ coin.btc }
              usd={ coin.usd }
              xAxis={ this.props.coins.map(c => c.createdAt) }
              yAxis={ this.props.coins.map(c => c.usd ? c.usd : 0.0) } />
            {/* <CardTxPerDay
              avgTX={ tTX }
            />   */}
            <div className="card">
              <div className="col-md-12 col-lg-6">
                <h3>Transactions Last 7 Days</h3>
                <h4>{ numeral(tTX).format('0,0') } { day }</h4>
                <h5>Average: { numeral(avgTX).format('0,0') } Per Hour</h5>
                {/* <GraphLineFull
                  color="#1991eb"
                  data={ Array.from(txs.values()) }
                  height="420px"
                  labels={ Array.from(txs.keys()) } /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <CardMasternodeSummary
              offline={ coin.mnsOff }
              online={ coin.mnsOn }
              xAxis={ this.props.coins.map(c => c.createdAt) }
              yAxis={ this.props.coins.map(c => c.mnsOn ? c.mnsOn : 0.0) } />
          </div>
          <div className="col-md-12 col-lg-6">
            <CardNetworkSummary
              difficulty={ coin.diff }
              hashps={ coin.netHash }
              xAxis={ this.props.coins.map(c => c.createdAt) }
              yAxis={ this.props.coins.map(c => c.diff ? c.diff : 0.0) } />
          </div>
        </div>
      </div>
    );
  };
}

const mapDispatch = dispatch => ({
  getCoins: () => Actions.getCoinsWeek(dispatch),
  getTXs: () => Actions.getTXsWeek(dispatch)
});

const mapState = state => ({
  coins: state.coins,
  txs: state.txs,
  coin: state.coin
});

export default connect(mapState, mapDispatch)(CoinSummary);
