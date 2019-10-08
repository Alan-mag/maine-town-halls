

/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import EventCard from '../EventCard';
// import './style.scss';

const EventPostponedCard = props => (
  <React.Fragment>
    <Card title={<h3>{props.title} town hall has been postponed, please check back for further information.</h3>} className="event-success-card" />
    <div className="disable-screen">
      <EventCard eventData={props.eventData} loading={props.loading} disabled />
    </div>
  </React.Fragment>
);

export default EventPostponedCard;

EventPostponedCard.propTypes = {
  eventData: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
