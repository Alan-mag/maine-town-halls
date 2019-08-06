import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Row, Col } from 'antd';

import './style.scss';

const EventCard = (props) => {
  const {
    eventData,
  } = props;
  return (
    <Card
      className="event-card"
      cover={<img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM&signature=pgcz8_2FdcdBqftd6BrlxesXTjA=`} alt="map" />}
      title={
        <div className="event-card-header">
          <div className="member-icon"><img src={'https://townhallproject.com/Images/map/circle-activism.svg'} alt="member-pic" /></div>
          <div className="event-card-header-title">
            <span className="title">{eventData.displayName}</span> <br /> <span className="subtitle">{eventData.district}</span>
          </div>
        </div>
      }
    >
      <div className="event-card-title">
        <Divider orientation="left">EVENT</Divider>
        <div className="event-card-section-content">
          <Row gutter={16}>
            <Col span={12}>
              <h3>{eventData.eventName}</h3>
            </Col>
            <Col span={12}>
              <div className="rsvp-btn">RSVP</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="event-card-date">
        <Divider orientation="left">DATE & LOCATION</Divider>
        <div className="event-card-section-content">
          <Row gutter={16}>
            <Col span={12}>
              {eventData.date} <br /> {eventData.Location}
            </Col>
            <Col span={12}>
              <div className="directions-btn">Directions</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="event-card-notes">
        <Divider orientation="left">NOTES</Divider>
        <div className="event-card-section-content">
          {eventData.notes}
        </div>
      </div>
      <div className="event-card-footer"></div>
    </Card>
  );
};

EventCard.propTypes = {
  eventData: PropTypes.shape({}).isRequired,
};

export default EventCard;
