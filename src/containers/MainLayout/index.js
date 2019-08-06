import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import './style.scss';

const { Header, Content, Footer } = Layout;

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className="layout">
        <Header className="header-banner">
          <span className="main-title">Town Hall Maine</span>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: 'rgb(240, 242, 245)', padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ background: '#021033', textAlign: 'center' }}></Footer>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
