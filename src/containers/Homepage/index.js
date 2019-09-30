import React from 'react';
import {
  Col,
  Row,
  Card,
} from 'antd';

import EventCard from '../../components/EventCard';
import MainLayout from '../../components/MainLayout';
import './style.scss';
import { firebasedb } from '../../utils/firebase';
import { eventIds } from '../../constants';

class Homepage extends React.Component {

  render() {
    const { event1, event2, loading } = this.state;
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <EventCard eventData={event1} loading={loading} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Card title={<h3>Thank you for joining us at our Bangor town hall!</h3>} className="event-success-card" />
            <div className="disable-screen">
              <EventCard eventData={event2} loading={false} disabled />
            </div>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
