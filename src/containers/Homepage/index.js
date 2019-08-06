import React from 'react';
import EventCard from '../../components/EventCard';

import {
  Col,
  Row,
} from 'antd';

import MainLayout from '../MainLayout';
import './style.scss';

const event1 = {
  formatLatLng: '43.6591,-70.2568',
  displayName: 'Richard Durbin',
  address: '104 Hart Senate Office Building, Washington, DC 20002',
  party: 'Democratic',
  date: 'Thu Apr 06 2017',
  time: '09:00 AM',
  id: 'event-1-id',
  iconFlag: 'iconFlag',
  chamber: 'upper',
  eventName: 'DC "Constituent Coffee" with Senators Durbin and Duckworth',
  meetingType: 'Empty Chair Town Hall',
  Location: 'Hart Senate Office Building',
  dateObj: 123219879,
  state: 'Maine',
  url: 'https://www.sandiegoreader.com/events/ongoing/san-diego-puzzling-drive-scavenger-/',
  urlText: 'Event Link',
  district: 'Senate',
  notes: 'A Puzzling Drive is best described a cross between a scavenger hunt, an informative self-guided driving tour, and a road rally. Complete the adventure as quickly or slowly as you like as only your question answering is timed. The goal is to have fun out and about, and hopefully learn some interesting things along the way. This activity is self-guided using any mobile device with web access so you can play any time on any day at your convenience.'
}

const event2 = {
  formatLatLng: '44.1004,-70.2148',
  displayName: 'displayName',
  address: 'address',
  party: 'party',
  date: 'date',
  time: 'time',
  id: 'event-2-id',
  iconFlag: 'iconFlag',
  chamber: 'chamber',
  eventName: 'eventName',
  meetingType: 'meetingType',
  Location: 'Location',
  dateObj: 123219879,
  state: 'Maine',
  url: 'url',
  urlText: 'urlText',
  district: 'district',
  notes: 'notes',
}

class Homepage extends React.Component {
  render() {
    return (
      <MainLayout>
        <Row gutter={16}>
          <Col span={12}>
            <EventCard eventData={event1} />
          </Col>
          <Col span={12}>
            <EventCard eventData={event2} />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

export default Homepage;
