
import Component from '../../core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import { API_BASE } from '../../constants';

import Icon from '../Icon';

const APIsection = (props) => {
    const handleCopy = (call) => {
      const dummy = document.createElement("input");

      document.body.appendChild(dummy);
      dummy.setAttribute('id', 'dummy');
      document.getElementById('dummy').value = API_BASE + call.path;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    };

    const calls = props.calls.map((call, idx) =>
      <div className="api__call" key={ idx }>
        <p className="api__call-name">{ call.name }</p>
        <p className="api__call-info">{ call.info }</p>
        <div className="card">
        <Icon name="copy" className="api__call-detail-indicator" />
        <div className="api__call-path" onClick={ () => handleCopy(call) }>
          <p className="api__call-path">{ call.path }</p>
        </div>
        </div>
      </div>
    );

    return (
      <div className="api__section">
        <div className="api__section-info">
          <p className="api__section-heading">{ props.heading }</p>
          <p className="api__section-sub-heading">{ props.subHeading }</p>
        </div>
        { calls }
      </div>
    );
};

APIsection.propTypes = {
  calls: PropTypes.array,
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default APIsection;
