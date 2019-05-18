
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import Icon from '../Icon';

const CardPoS = ({ average, height, posHeight }) => {
  if (height >= posHeight) {
    return null;
  }

  let label = 'minutes';
  let blocks = posHeight - height;
  let dur = (blocks * average) / 60.0;

  if (blocks <= 1) {
    label = 'seconds';
    dur = blocks * average;
  }
  // Convert to hours.
  else if (dur > 60) {
    label = 'hours';
    dur /= 60.0;
  }

  const displayChangeover = (
    <span>
      { dur.toFixed(2) } { label }
    </span>
  );

  return (
    <div className="animated fadeInUp">
      {/* wire this up */}
      <Card
        title="Pos Changeover"
        subTitle={displayChangeover}
        single>
      </Card>
    </div>
  );
};

CardPoS.propTypes = {
  average: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  posHeight: PropTypes.number.isRequired
};

export default CardPoS;
