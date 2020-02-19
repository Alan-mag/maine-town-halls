/* eslint-disable max-len */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import { partners } from '../../constants';

import './style.scss';

const {
  Footer,
} = Layout;


const FooterBanner = () => (
  <Footer className="layout-footer" style={{ textAlign: 'center' }} >
    <div className="partners-container">
      <h2>Town Hall Hosts</h2>
      <Row type="flex" justify="center">
        {partners.map(partner => (

          <Col sm={6} xs={8} key={partner.name} className={`partner`}>
            {/* <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
            > */}
              <img src={`images/${partner.src}`} alt={`${partner.name} logo`} />
            {/* </a> */}
          </Col>
        ))}
      </Row>
    </div>
    <div className="privacy-policy-container"><a href="https://townhallproject.com/#privacy-policy" target="_blank">Privacy Policy</a></div>
  </Footer>
);

export default FooterBanner;
