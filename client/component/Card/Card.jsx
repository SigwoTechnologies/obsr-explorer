
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

export default class Card extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    title: PropTypes.string
  };

  render() {
    const { props } = this;

    return (
      <div
        className={ `card ${ props.className ? props.className : '' }` }
        style={ !!props.style ? props.style : {} }>
        <div className="card__title--noline" style={{ borderBottom: '2px solid lightgray', borderWidth: '2px' }}>
          <div className="card__title--left" className={`card__title${props.subTitle ? '--left' : null}`}>
            { props.title }
          </div>
          {props.subTitle ? (
            <div className="card__title--right">
              {props.subTitle}
            </div>
          ) : null}
        </div>
        {this.props.footer ? <div className="card__footer">
          { props.footer }
        </div> : null}
        {this.props.single ? props.children : <div className="card__body">
          { props.children }
        </div>}
      </div>
    );
  };
}
