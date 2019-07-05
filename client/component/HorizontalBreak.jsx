
import Component from '../core/Component';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Will use material icons to render.
 * @param {Object} props The props with the name.
 */
const HorizontalBreak = (props) => (
  <div className={ `break ${ props.className ? props.className : '' }` } >
    <span className="break__title">{ props.title }</span>
    <div className="break__wrapper">
      
    </div>
    { !!props.select &&
      <div className="break__select">
        { props.select }
      </div>
    }
  </div>
);

HorizontalBreak.propTypes = {
  title: PropTypes.string
};

export default HorizontalBreak;
