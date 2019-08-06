import React from 'react';

import { Layout } from 'antd';
import './style.scss';

const { Header, Content, Footer } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Layout className="layout">
        <Header className="header-banner">
          <span className="main-title">Town Hall Maine</span>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: 'rgb(240, 242, 245)', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ background: '#021033', textAlign: 'center' }}></Footer>
      </Layout>
    );
  }
}

export default MainLayout;
