import Component from 'core/Component';
import React from 'react';

import SearchBar from '../../component/SearchBar';
import getPageName from './getPageName';

export default class PageTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="page-title searchContainer d-none d-md-block">
        <div className="page-title__wrapper container">
          <div className="page-title__col mr-auto">
            <span>{getPageName(this.props.location)}</span>
          </div>
          <div className="page-title__col ml-auto">
            <SearchBar
              onSearch={ this.props.onSearch } />
          </div>
        </div>
      </div>
    )
  }
}