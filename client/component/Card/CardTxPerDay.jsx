
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import Icon from '../Icon';

const CardTxPerDay = ({ txDay }) => {
txDay=0;
  return (
    <div className="animated fadeInUp">
      {/* wire this up */}
      <Card
        title="Transaction Velocity"
        subTitle="tx/day"
        single>
      </Card>
    </div>
  );
};

CardTxPerDay.propTypes = {
  txDay: PropTypes.number
};

export default CardTxPerDay;
