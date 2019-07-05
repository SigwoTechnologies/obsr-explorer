
import Component from '../core/Component';
import React from 'react';

import APIdata from '../component/API/APIdata';
import APIsection from '../component/API/APIsection';

export default class API extends Component {

  getSections = () => {
    return APIdata.map((section, idx) => {
      return <APIsection
        key={ idx }
        heading={ section.heading }
        subHeading={ section.subHeading }
        calls={ section.calls } />
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-3">
            <div className="api__nav">
              API Calls <br />
              <p className="api__section-sub-heading">
                getAddress [hash]<br />
                getBlock [hash][height]<br />
                getBlockAverage<br />
                getCoin<br />
                getCoinHistory<br />
                getMasternodes<br />
                getMasternodeByAddress<br />
                getMasternodeCount<br />
                getMasternodeAverage<br />
                getPeer<br />
                getSupply<br />
                getTop100<br />
                getTXs<br />
                getTXLatest<br />
                getTX [hash]<br />
                getDifficulty<br />
                getConnectionCount<br />
                getBlockCount<br />
                getNetworkHashPS<br />
              </p>
                Extended API
              <p className="api__section-sub-heading">
                getMoneySupply<br />
                getAddress<br />
                getBalance<br />
                getLastTXs<br />
              </p>
                Linking (GET)
              <p className="api__section-sub-heading">
                Transaction (/#/tx/[hash])<br />
                Block (/#/block/[hash|height]<br />
                Address (/#/address/[hash]<br />
              </p>
            </div>
          </div>
          <div className="col-md-9">
          <p className="api__section-sub-heading">The block explorer provides and API 
        allowing users and/or applications to retrieve information from the network 
        without the need for a local wallet.</p><br /><br />
            { this.getSections() }
          </div>
        </div>
      </div>
    );
  };
}
