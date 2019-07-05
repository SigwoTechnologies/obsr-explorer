
import Component from '../../core/Component';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CountUp from '../CountUp';
import GraphLine from '../Graph/GraphLine';
import Icon from '../Icon';

export default class CardStatus extends Component {
  static defaultProps = {
    btc: 0.0,
    usd: 0.0,
    xAxis: [],
    yAxis: []
  };

  static propTypes = {
    btc: PropTypes.number.isRequired,
    usd: PropTypes.number.isRequired,
    xAxis: PropTypes.array.isRequired,
    yAxis: PropTypes.array.isRequired
  };

  render() {
    const len = this.props.yAxis.length;
    const yAxis = this.props.yAxis;
    let growth = len > 0
      ? (yAxis[0] - yAxis[len - 1]) / yAxis[len - 1]
      : 0;
    if (!isFinite(growth)) {
      growth = 0.0;
    }
    const isPos = growth >= 0;
    const dirArrow = isPos ? 'arrow-up' : 'arrow-down';

    const displayGrowth = (
      <span
        className={`u--text-${isPos ? 'green' : 'red'}`}
        key={dirArrow}>
        <Icon className="card__icon--arrow" name={dirArrow} />
        {' '}
        <span>{numeral(growth * 100.0).format('0,0.00')}%</span>
      </span>
    );

    return (
      <div className="animated fadeInUp">
        <Card className="card--graph" title="OBSR Market" subTitle={displayGrowth}>
          <div className="card__row">
            <span className="card__label">
              USD market
          </span>
            <span className="card__result">
              <CountUp
                decimals={3}
                duration={1}
                end={this.props.usd}
                prefix={'$ '}
                start={0} />
            </span>
          </div>
          <div className="line-divider" />
          <div className="card__row">
            <span className="card__label">
              BTC market
          </span>
            <span className="card__result">
            <CountUp
                decimals={8}
                duration={1}
                end={this.props.btc}
                start={0} />
            </span>
          </div>
          <GraphLine
            color={isPos ? '#61d75e' : '#ed1c24'}
            className="card__graph"
            data={this.props.yAxis.reverse()}
            height="77px"
            labels={this.props.xAxis.reverse()} />
        </Card>
      </div>
    );
  };
}
