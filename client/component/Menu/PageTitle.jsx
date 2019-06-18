import Component from 'core/Component';
import React from 'react';

import SearchBar from '../../component/SearchBar';

export default class PageTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }
  
  renderPathName = () => {
    const local = this.props.location;
    if (local == '/') {
      return 'Overview'
    }
    if (local == '/peer') {
      return 'Connections'
    }
    if (local == '/api') {
      const term = 'api';
      return term.toUpperCase();
    }
    if (local == '/coin') {
      return 'OBSR Info'
    }
    return local.replace('/', '');
  }

  render() {
    if (this.props.location) {

    }
    return (
      <div className="page-title searchContainer d-none d-md-block">
        <div className="page-title__wrapper container">
          <div className="page-title__col mr-auto">
            <span>{this.renderPathName()}</span>
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