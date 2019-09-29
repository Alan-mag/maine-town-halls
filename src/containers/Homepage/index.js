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
  constructor(props) {
    super(props);
    this.state = {
      event1: {},
      event2: {},
      loading: true,
    };
  }
  componentDidMount() {
    const event1Promise = firebasedb.ref(`townHalls/${eventIds[0]}`).once('value');
    const event2Promise = firebasedb.ref(`townHalls/${eventIds[1]}`).once('value');
    Promise.all([event1Promise, event2Promise])
      .then(eventData => eventData.reduce((acc, cur, index) => {
        acc[`event${index + 1}`] = cur.val();
        return acc;
      }, {}))
      .then((data) => {
        this.setState({
          ...data,
          loading: false,
        });
      });
  }

  render() {
    const { event1, event2, loading } = this.state;
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <EventCard eventData={event1} loading={loading} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <EventCard eventData={event2} loading={loading} />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
