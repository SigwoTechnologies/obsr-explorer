
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
    const { props } = this;

    return props.links.map((i, idx) => {
      const isActive = (props.location.pathname === i.href);
      return (
        <Link
          key={ idx }
          className={ `menu-desktop__item ${ isActive? 'menu-desktop__item--is-active' : '' }` }
          to={ i.href }>
          <span className="menu-desktop__item-label" >{ i.label }</span>
        </Link>
      )
    }
    )
};

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {

    const newNavbar = (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src="/img/obsrlogo.png" className="menu-desktop__logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { this.getLinks() }
          </Nav>
          <Nav navbar className="ml-auto">
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
            <span className="footer__signature">obsr.org</span>
          </Nav>
        </Collapse>
      </Navbar>
    );

    return (
        <div className={ `menu-desktop ${ this.state.isOpen ? 'menu-desktop--open' : 'menu-desktop--close' }` }>
          <div className="menu-desktop__content-wrapper">
            <div className="menu-desktop__header mr-4">
              <img src="/img/obsrlogo.png" className="menu-desktop__logo" />
            </div>
            <div className="menu-desktop__nav">
              { this.getLinks() }
            </div>
            <div className="menu-desktop__social ml-auto">
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
