
import Component from '../../core/Component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CountUp from '../CountUp';

export default class CardStatus extends Component {
  static defaultProps = {
    avgBlockTime: 90,
    avgMNTime: 24,
    blocks: 0,
    peers: 0,
    status: 'Offline',
    supply: 0
  };

  static propTypes = {
    avgBlockTime: PropTypes.number.isRequired,
    avgMNTime: PropTypes.number.isRequired,
    blocks: PropTypes.number.isRequired,
    peers: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    supply: PropTypes.number.isRequired
  };

  render() {
    const isOn = this.props.status === 'Online';
    const displayStatus = (
      <span className={ `u--text-${ isOn ? 'green' : 'red' }`}>
        {isOn ? <div className="green-dot" /> : <div className="red-dot" />}
        {' '}
        { this.props.status }
      </span>
    );

    return (
      <div className="animated fadeInUp">
        <Card title="Status" className="card--status" subTitle={displayStatus} >
          <div className="card__row">
            <span className="card__label">Blocks</span>
            <span className="card__result">
              {/* <Link to={ `/block/${ this.props.blocks }` }>
                <CountUp
                  decimals={ 0 }
                  duration={ 1 }
                  end={ this.props.blocks }
                  start={ 0 } />
              </Link> */}
              <CountUp
                decimals={ 0 }
                duration={ 1 }
                end={ this.props.blocks }
                start={ 0 } />
            </span>
          </div>
          <div className="line-divider" />
          <div className="card__row">
            <span className="card__label">Total Supply</span>
            <span className="card__result">
              <CountUp
                decimals={ 4 }
                duration={ 1 }
                end={ this.props.supply }
                start={ 0 } />
            </span>
          </div>
          <div className="line-divider" />
          <div className="card__row">
            <span className="card__label">
              Peer
            </span>
            <span className="card__result">
              {/* <Link to="/peer">{ this.props.peers }</Link> */}
              { this.props.peers }
            </span>
          </div>
          <div className="line-divider" />
          <div className="card__row">
            <span className="card__label">
              Avg. Block Time
            </span>
            <span className="card__result">
              { this.props.avgBlockTime.toFixed(2) } seconds
            </span>
          </div>
          <div className="line-divider" />
          <div className="card__row">
            <span className="card__label">
              Avg. MN Payment
            </span>
            <span className="card__result">
              { this.props.avgMNTime.toFixed(2) } hours
            </span>
          </div>
        </Card>
      </div>
    );
  };
}
