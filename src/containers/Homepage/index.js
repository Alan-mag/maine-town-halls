import React from 'react';

import {
  Card,
  Col,
  Row,
} from 'antd';

import MainLayout from '../MainLayout';
import './style.scss';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="event-card">
              Card 1
            </Card>
          </Col>
          <Col span={12}>
            <Card className="event-card">
              Card 2
            </Card>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
