
// import Component from '../../core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { API_BASE } from '../../constants';

const APIname = (props) => {
  const calls = props.calls.map((call, idx) =>
    <div className="api__name" key={ idx }>
      <Link smooth className="api__link" to={`api#${call.name}`}>{call.name}</Link>
    </div>
  );

  return calls;
};

APIname.propTypes = {
  name: PropTypes.string,
};

export default APIname;
