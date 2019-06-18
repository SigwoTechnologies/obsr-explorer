import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SearchBar from '../SearchBar';

export default class MenuMobile extends Component {
  static propTypes = {
    links: PropTypes.array
  };

  static defaultProps = {
    links: []
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  getLinks = () => {
    const { props } = this;

    return props.links.map((i, idx) => {
      return (
        <li key={ idx }>
          <Link to={ i.href } onClick={ this.handleToggle }>
            { i.label }
          </Link>
        </li>
      )
    })
  };

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  // render() {
  //   return (
  //     <div className={ `menu-mobile ${ this.state.isOpen ? 'menu-mobile--open' : 'menu-mobile--close' }` }>
  //       <div className="menu-mobile__search-wrapper">
  //         <h1>navbar</h1>
  //         <a onClick={ this.handleToggle } >
  //           <Icon name="bars" className="menu-mobile__toggle" onClick={ this.handleToggle } />
  //         </a>
  //       </div>
  //       <div className="menu-mobile__item-wrapper">
  //         <div className="menu-mobile__search-wrapper">
  //           <SearchBar
  //             className="search--mobile"
  //             onSearch={ this.props.onSearch }
  //             placeholder="Search Blockchain" />
  //         </div>
  //         { this.getLinks() }
  //       </div>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div className={ `menu-mobile ${ this.state.isOpen ? 'menu-mobile--open' : 'menu-mobile--close' }` }>
        <div className="menu-mobile__heading">Page Name</div>
        <div className="menu-mobile__hamburger">
          <a onClick={ this.handleToggle } >
            <Icon name="bars" className="menu-mobile__toggle" onClick={ this.handleToggle } />
          </a>
        </div>
        <div className="menu-mobile__menu">
          <a className="sidenav-close" onClick={ this.handleToggle } >
            <Icon name="times" className="menu-mobile__toggle" onClick={ this.handleToggle } />
          </a>
          <div className="menu-mobile__menu--content">
            <div className="menu-mobile__search">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search blockchain" />
            </div>
            <ul>
              { this.getLinks() }
            </ul>
          </div>
          {/* <div className="menu-mobile__search-wrapper">
            <SearchBar
              className="search--mobile"
              onSearch={ this.props.onSearch }
              placeholder="Search Blockchain" />
          </div>
          { this.getLinks() } */}
        </div>
      </div>
    )
  }
}