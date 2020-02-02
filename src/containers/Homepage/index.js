import React from 'react';
import {
  Col,
  Row,
} from 'antd';
import { isEmpty } from 'lodash';

import EventCard from '../../components/EventCard';
import MainLayout from '../../components/MainLayout';
import './style.scss';
import { firebasedb } from '../../utils/firebase';
import {
  eventIds,
  event1Data,
  // event2Data,
  eventTitles,
} from '../../constants';
import EventSuccessCard from '../../components/EventSuccessCard';
import EventPostponedCard from '../../components/EventPostponedCard';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.renderPostponed = this.renderPostponed.bind(this);
    this.renderLive = this.renderLive.bind(this);
    this.renderPast = this.renderPast.bind(this);
    this.state = {
      event1: event1Data,
      // event2: event2Data,
      event1Type: 'live',
      // event2Type: 'postponed',
      loading: true,
    };
  }
  componentDidMount() {
    const {
      event1, 
      // event2,
    } = this.state;
    const promises = [];
    if (isEmpty(event1)) {
      promises.push(firebasedb.ref(`townHalls/${eventIds[0]}`).once('value'));
    }
    // if (isEmpty(event2)) {
    //   promises.push(firebasedb.ref(`townHalls/${eventIds[1]}`).once('value'));
    // }
    Promise.all(promises)
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

  renderLive(eventData, title) {
    const {
      loading,
    } = this.state;
    return (<EventCard title={title} eventData={eventData} loading={loading} />);
  }

  renderPast(eventData, title) {
    const {
      loading,
    } = this.state;
    return (<EventSuccessCard title={title} eventData={eventData} loading={loading} />);
  }

  renderPostponed(eventData, title) {
    const {
      loading,
    } = this.state;
    return (<EventPostponedCard title={title} eventData={eventData} loading={loading} />);
  }

  render() {
    const {
      event1,
      // event2,
      event1Type,
      // event2Type,
    } = this.state;
    const renderMap = {
      live: this.renderLive,
      past: this.renderPast,
      postponed: this.renderPostponed,
    }
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {renderMap[event1Type](event1, eventTitles[0])}
          </Col>
          {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {renderMap[event2Type](event2, eventTitles[1])}
          </Col> */}
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
