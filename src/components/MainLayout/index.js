import React from 'react';
import PropTypes from 'prop-types';
import CrowdBanner from '../../components/CrowdBanner';

import { Layout } from 'antd';
import HeaderBanner from '../Header';

import './style.scss';

const { Content, Footer } = Layout;

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className="layout">
        <HeaderBanner />
        <Content style={{ padding: '50px' }}>
          <div
            style={{
              background: 'rgb(240, 242, 245)',
              minHeight: 280,
              padding: 24,
              }}
            className="container"
          >
            {children}
          </div>
        </Content>
        <CrowdBanner />
        <Footer className="layout-footer" style={{ textAlign: 'center' }} />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
