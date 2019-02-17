
import Component from '../../core/Component';
import { date24Format } from '../../../lib/date'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Table from '../Table';

export default class CardTXs extends Component {
  static defaultProps = {
    txs: []
  };

  static propTypes = {
    txs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      cols: [
        { key: 'blockHeight', title: 'Block Height' },
        { key: 'txId', title: 'Transaction Hash' },
        { key: 'createdAt', title: 'Time' },
        { key: 'vout', title: 'Amount' },
      ]
    };
  };

  render() {
    return (
      <Table
        cols={ this.state.cols }
        data={ this.props.txs.map(tx => {
          let blockValue = 0.0;
          if (tx.vout && tx.vout.length) {
            tx.vout.forEach(vout => blockValue += vout.value);
          }

          return ({
            ...tx,
            blockHeight: (
              <Link to={ `/block/${ tx.blockHeight }` }>
                { tx.blockHeight }
              </Link>
            ),
            createdAt: date24Format(tx.createdAt),
            txId: (
              <Link to={ `/tx/${ tx.txId }` }>
                TXID { tx.txId }
              </Link>
            ),
            vout: (
              <span className={ `badge badge-${ blockValue < 0 ? 'danger' : 'info' }` }>
                { numeral(blockValue).format('0,0.0000') + " OSBR" }
              </span>
            )
          });
        }) } />
    );
  };
}
