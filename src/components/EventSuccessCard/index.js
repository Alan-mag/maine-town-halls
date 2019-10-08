

/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import EventCard from '../EventCard';
import './style.scss';

const EventSuccessCard = props => (
  <React.Fragment>
    <Card title={<h3>Thank you for joining us at our {props.title} town hall!</h3>} className="event-success-card" />
    <div className="disable-screen">
      <EventCard eventData={props.eventData} loading={props.loading} disabled />
    </div>
  </React.Fragment>
);

export default EventSuccessCard;

EventSuccessCard.propTypes = {
  eventData: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
