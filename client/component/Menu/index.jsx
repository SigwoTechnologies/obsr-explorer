
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import menuData from './menuData';
import PageTitle from './PageTitle';


class Menu extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  render() {
    const local = this.props.location.pathname;
    return (
      <div className="menu-wrapper">
        <MenuMobile links={ menuData } location={local} onSearch={ this.props.onSearch } />
        <MenuDesktop links={ menuData } location={ this.props.location } />
        <PageTitle location={local} onSearch={ this.props.onSearch } />
      </div>
    )
  }
}

export default withRouter(Menu);

