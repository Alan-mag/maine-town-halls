import React from 'react';
import PropTypes from 'prop-types';
import CrowdBanner from '../../components/CrowdBanner';
import { Layout } from 'antd';
import './style.scss';

const { Header, Content, Footer } = Layout;

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className="layout">
        <Header className="header-banner">
          <div className="main-title">TOWN HALLS FOR MAINE</div>
          <div className="main-subtitle">Town Hall Maine Subtitle Text Here</div>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: 'rgb(240, 242, 245)', padding: 24, minHeight: 280 }} className="container">
            {children}
          </div>
        </Content>
        <CrowdBanner />
        <Footer className="layout-footer">Privacy Policy</Footer>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default MainLayout;
