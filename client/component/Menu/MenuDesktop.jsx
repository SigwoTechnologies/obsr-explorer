
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

import Icon from '../Icon';

export default class MenuDesktop extends Component {
  static propTypes = {
    links: PropTypes.array
  };

  static defaultProps = {
    links: []
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }

  getLinks = () => {
    const { props, state } = this;

    return props.links.map((i, idx) => {
      const isActive = (props.location.pathname === i.href);
      const iconSource = i.icon.split('.svg')[0] + '_white.svg';

      return (
        <Link
          key={ idx }
          className={ `menu-desktop__item ${ isActive? 'menu-desktop__item--is-active' : '' }` }
          to={ i.href }>
          <span className="menu-desktop__item-label" >{ i.label }</span>
          <Icon name="caret-left" className="menu-desktop__item-indicator" />
        </Link>
      )
    }
    )
  };

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div className={ `menu-desktop ${ this.state.isOpen ? 'menu-desktop--open' : 'menu-desktop--close' }` }>
        <div className="menu-desktop__content-wrapper">
          <div className="menu-desktop__header">
          <img src="/img/obsrlogo.png" className="menu-desktop__logo" />
          </div>
          <p className="menu-desktop__title"></p>
          { this.getLinks() }
            <div>
              <a href="https://t.me/observer_official" target="_blank">
                <Icon name="telegram" className="fab footer__social-media-icon" />
              </a>
              <a href="https://github.com/observernet" target="_blank">
                <Icon name="github" className="fab footer__social-media-icon" />
              </a>
              <a href="https://twitter.com/observerfounda1" target="_blank">
                <Icon name="twitter" className="fab footer__social-media-icon" />
              </a>
              <a href="https://www.facebook.com/Observer-Foundation-172553103444990/" target="_blank">
                <Icon name="facebook" className="fab footer__social-media-icon" />
              </a>
            </div>
        </div>
      </div>
    )
  }
}
