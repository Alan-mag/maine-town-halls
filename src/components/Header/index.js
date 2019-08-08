/* eslint-disable max-len */
import React from 'react';
import { Layout } from 'antd';

import './style.scss';

const {
  Header,
} = Layout;


const HeaderBanner = () => (
  <Header className="header-banner">
    <div className="main-title">Town Halls For Maine</div>
    <div className="main-subtitle">
      <p>Senator Collins, it’s been over 20 years since you held an open town hall meeting with the people you works for: Mainers. <strong className="senator-time">Senator, it’s time.</strong>
        <br /><br /> In the midst of a month-long Congressional Recess this August, what is more important than meeting with and listening to your constituents?
      </p>
      <p>Please join your fellow Mainers at these town hall meetings and listen to their priorities, their values, and their questions about your work in Washington, D.C.
      </p>
    </div>
  </Header>
);

export default HeaderBanner;
