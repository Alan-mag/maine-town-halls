/* eslint-disable max-len */
import React from 'react';
import { Layout, Row, Col } from 'antd';

import './style.scss';

const {
  Header,
} = Layout;


const HeaderBanner = () => (
  <Header className="header-banner">
    <div><h1 className="main-title">Town Halls For Maine</h1></div>
    <Row className="main-subtitle" type="flex" justify="space-around">
      <Col sm={6} xs={24}>
        <img src="images/lighthouse.png" alt="lighthouse"/>
      </Col>
      <Col sm={16} xs={24}>
        <p>Senator Collins, it’s been over 20 years since you held an open town hall meeting. In the midst of a month-long Congressional Recess this August, what is more important that meeting with and listen to the Mainers you work for in a public, open setting?  <br /><span className="time-senator">Senator, it’s time.</span>
        </p>
        <p>Please join your fellow Mainers at these town hall meetings and listen to their priorities, their values, and their questions about your work in Washington, D.C.
        </p>
      </Col>
    </Row>
  </Header>
);

export default HeaderBanner;
