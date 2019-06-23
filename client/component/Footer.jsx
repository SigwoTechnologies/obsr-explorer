
import Component from '../core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

/**
 * Will use material icons to render.
 * @param {Object} props The props with the name.
 */
class Footer extends Component {
  // static propTypes = {
  //   coins: PropTypes.array.isRequired,
  //   txs: PropTypes.array.isRequired,
  // };

  render() {
    return (
      <div className="footer container">
        <div className="footer__block">
          <img className="footer__logo" src="/img/obsrlogo.png" />
        </div>
        <div className="footer__block">
          <div className="footer__data-wrapper">
            <div className="footer__data-block">
              <a href="/">Overview</a>
              
            </div>
            <div className="footer__data-block">
              <a href="/#/movement">Movement</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/masternode">Masternode</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/peer">Connections</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/statistics">Statistics</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/api">API</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/coin">OBSR Info</a>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="menu-desktop__social ml-auto">
            <a href="https://github.com/observernet" target="_blank">
              <Icon name="github" className="fab footer__social-media-icon" />
            </a>
            <a href="https://t.me/observer_official" target="_blank">
              <Icon name="telegram" className="fab footer__social-media-icon" />
            </a>
            <a href="https://open.kakao.com/o/gPsdW8T" target="_blank">
              <Icon name="comment-dots" className="fas footer__social-media-icon" />
            </a>
            <a href="https://twitter.com/observerfounda1" target="_blank">
              <Icon name="twitter" className="fab footer__social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default Footer;