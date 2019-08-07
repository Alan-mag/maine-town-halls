import React from 'react';
import PropTypes from 'prop-types';

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
          <div style={{ background: 'rgb(240, 242, 245)', padding: 24, minHeight: 280 }} className="container">
            {children}
          </div>
        </Content>
        <Footer className="layout-footer" style={{ textAlign: 'center' }}></Footer>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
