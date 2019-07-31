
import Component from '../core/Component';
import React from 'react';

import APIdata from '../component/API/APIdata';
import APIsection from '../component/API/APIsection';
import APIname from '../component/API/APIname';

export default class API extends Component {

  getSections = () => {
    return APIdata.map((section, idx) => {
      return <APIsection
        key={idx}
        heading={section.heading}
        subHeading={section.subHeading}
        calls={section.calls} />
    });
  };

  getSectionsNames = () => {
    return APIdata.map((section, idx) => {
      return <APIname
        key={idx}
        calls={section.calls} />
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-3">
            <div className="api__nav">
              <div className="api__menuStay">
                <div className="d-none d-lg-block">
                  {this.getSectionsNames()}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <p className="api__section-sub-heading">The block explorer provides and API
          allowing users and/or applications to retrieve information from the network
        without the need for a local wallet.</p><br /><br />
            {this.getSections()}
          </div>
        </div>
      </div>
    );
  };
}
