import React from 'react';

import {
  Card,
  Col,
  Row,
} from 'antd';

import MainLayout from '../MainLayout';
import './style.scss';
import RsvpButton from '../RsvpButton';

class Homepage extends React.Component {
  render() {
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="event-card">
              Card 1
              <RsvpButton
                eventName="Event 1"
                eventId="event1id"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="event-card">
              <RsvpButton
                eventName="Event 2"
                eventId="event2id"
              />
            </Card>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
