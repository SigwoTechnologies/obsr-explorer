
import Actions from '../core/Actions';
import Component from '../core/Component';
import { connect } from 'react-redux';
import { date24Format } from '../../lib/date';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from '../component/Card/Card';

import GraphLineFull from '../component/Graph/GraphLineFull';
import CoinSummary from '../container/CoinSummary';

import HorizontalRule from '../component/HorizontalRule';
import Table from '../component/Table';

class Overview extends Component {
  static propTypes = {
    txs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      cols: [
        {title: 'Height', key: 'blockHeight'},
        {title: 'Transaction Hash', key: 'txId'},
        'recipients',
        'age',
        {title: 'Created', key: 'createdAt'},
        {title: 'Value', key: 'vout'},
      ]
    };
  };

  render() {
    // Setup the list of transactions with age since created.
    const txs = this.props.txs.map(tx => {
      const createdAt = moment(tx.createdAt).utc();                                                                           
      const diffSeconds = moment().utc().diff(createdAt, 'seconds');
      let blockValue = 0.0;
      if (tx.vout && tx.vout.length) {
        tx.vout.forEach(vout => blockValue += vout.value);
      }

      return ({                                                                                                                                       
        ...tx,
        age: diffSeconds < 60 ? `${ diffSeconds } seconds` : createdAt.fromNow(true),
        blockHeight: (<Link to={ `/block/${ tx.blockHeight }` }>{ tx.blockHeight }</Link>),
        createdAt: date24Format(tx.createdAt),
        recipients: tx.vout.length,
        txId: (<Link to={ `/tx/${ tx.txId }` }>{ tx.txId }</Link>),
        vout: numeral(blockValue).format('0,0.0000') + ' OBSR'
      });
    });

    return (
      <div>
        <CoinSummary />
        <HorizontalRule title="Latest Blocks" />
        <Table
          cols={ this.state.cols }
          data={ txs } />
      </div>
    );
  };
}

const mapDispatch = dispatch => ({

});

const mapState = state => ({
  txs: state.txs
});

export default connect(mapState, mapDispatch)(Overview);
