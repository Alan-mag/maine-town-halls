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
      <Header className="header-banner"></Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ background: '#b0b1b1', textAlign: 'center' }}></Footer>
      </Layout>
    );
  }
}

export default MainLayout;
