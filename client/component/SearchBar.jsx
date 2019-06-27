
import Component from '../core/Component';
import config from '../../config';
import { isAddress, isBlock } from '../../lib/blockchain';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

export default class SearchBar extends Component {
  static defaultProps = {
    placeholder: 'You can search by block height, hash, or address.',
  }

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();

      const term = ev.target.value.trim();
      ev.target.value = '';

      if (!!term) {
        this.props.onSearch(term);
      }
    }
  };

  render() {
    const { props } = this;

    return (
      <div className="animated fadeIn" style={{ width: '100%' }}>
        <div className={ `search ${ props.className ? props.className : '' }` }>
          <Icon name="search" className="search__icon" />
          <input
            className="search__input"
            onKeyPress={ this.handleKeyPress }
            placeholder={ props.placeholder } />
        </div>
      </div>
    );
  };
}
