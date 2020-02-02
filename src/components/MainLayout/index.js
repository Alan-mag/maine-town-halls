import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import CrowdBanner from '../../components/CrowdBanner';
import HeaderBanner from '../Header';
import FooterBanner from '../Footer';

import './style.scss';

const { Content } = Layout;

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className="layout">
        <HeaderBanner />
        <Content className="main-content">
          <div
            style={{
              background: 'rgb(240, 242, 245)',
              minHeight: 280,
              padding: 24,
              width: '50vw',
              margin: `0 auto`,
              }}
            className="container"
          >
            {children}
          </div>
        </Content>
        <CrowdBanner />
        <FooterBanner />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
