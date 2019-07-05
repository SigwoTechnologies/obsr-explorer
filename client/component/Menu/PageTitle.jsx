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
            <div className="page-title-text">{getPageName(this.props.location)}</div>
          </div>
          <div className="page-title__col ml-auto">
            {/* {this.props.location == '/peer'
              ? null
              : <SearchBar onSearch={this.props.onSearch} />} */}
            {/* <SearchBar
              onSearch={ this.props.onSearch } /> */}
            <SearchBar onSearch={this.props.onSearch} />
          </div>
        </div>
      </div>
    )
  }
}