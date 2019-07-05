
import Component from '../../core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import { API_BASE } from '../../constants';

const APIsection = (props) => {
  const handleCopy = (call) => {
    console.log(call);
    const dummy = document.createElement("input");

    document.body.appendChild(dummy);
    dummy.setAttribute('id', 'dummy');
    document.getElementById('dummy').value = API_BASE + call.path;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  const calls = props.calls.map((call, idx) =>
    <div className="api__call" key={ idx } id={ call.name }>
      <p className="api__call-name">{ call.name }</p>
      <p className="api__call-info">{ call.info }</p>
      <div className="api__call-path" onClick={ () => handleCopy(call) }>
        <div className="api__call-path">
          <input value={ call.path } readOnly />
          <button type="button" onClick={ () => handleCopy(call)}>Copy</button>
        </div>
      </div>
    </div>
  );

  return calls;
};

APIsection.propTypes = {
  calls: PropTypes.array,
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default APIsection;
