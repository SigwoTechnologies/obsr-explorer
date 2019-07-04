
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import Icon from '../Icon';

const FooterMenuData = [
  {label: 'Overview', href: '/'},
  {label: 'Movement', href: '/movement'},
  {label: 'Masternode', href: '/masternode'},
  {label: 'Connections', href: '/peer'},
  // {label: 'Statistics', icon: '/img/statistics.svg', href: '/statistics'},
  {label: 'API', href: '/api'},
  {label: 'OBSR Info', href: '/coin'}
]

export default class FooterMenu extends Component {
  static propTypes = {
    links: PropTypes.array
  };

  static defaultProps = {
    links: []
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    }
  }

  getLinks = () => {
    const { props } = this;

    return props.links.map((i, idx) => {
      return (
        <Link
          key={ idx }
          className="menu-desktop__item"
          to={ i.href }>
          <span className="menu-desktop__item-label" >{ i.label }</span>
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
            <div className="menu-desktop__nav container">
              { this.getLinks() }
            </div>
            <div className="menu-desktop__social">
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
              <a className="obsr-link" href="https://obsr.org">obsr.org</a>
            </div>
          </div>
        </div>
    )
  }
}
