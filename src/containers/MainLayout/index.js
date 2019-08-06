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
        <Header className="header-banner" />
        <Content style={{ padding: '50px' }}>
          <div style={{
            background: '#fff',
            minHeight: 280,
            padding: 24,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ background: '#b0b1b1', textAlign: 'center' }} />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
