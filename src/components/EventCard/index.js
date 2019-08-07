import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Row, Col } from 'antd';

import RsvpButton from '../../containers/RsvpButton';

import './style.scss';

const EventCard = (props) => {
  const {
    eventData,
    loading,
  } = props;
  return (
    <Card
      className="event-card"
      loading={loading}
      // cover={<img src={`http://maps.googleapis.com/maps/api/staticmap?center=${eventData.formatLatLng}&zoom=10&size=600x300&maptype=roadmap&key=AIzaSyBkezlJl3YY3_PT6sfu4Kc99hda3az0Heg`} alt="map" />}
      title={
        <div className="event-card-header">
          <div className="member-icon">
            {/*<img src={''} alt="member-pic" />*/}
          </div>
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
              <RsvpButton
                eventName={eventData.eventName}
                eventId={eventData.id}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="event-card-date">
        <Divider orientation="left">DATE & LOCATION</Divider>
        <div className="event-card-section-content">
          <Row gutter={16}>
            <Col span={12}>
              <strong>{eventData.Time}</strong>
              <br />
              <strong>{eventData.dateString}</strong>
              <br /> 
              {eventData.address}
            </Col>
            <Col span={12}>
              <div className="directions-btn"><a href={`https://www.google.com/maps/dir/?api=1&destination=${eventData.lat},${eventData.lng}`} target="_blank" rel="noopener noreferrer">Directions</a></div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="event-card-notes">
        <Divider orientation="left">NOTES</Divider>
        <div className="event-card-section-content">
          {eventData.Notes}
        </div>
      </div>
      <div className="event-card-map">
        <img src={`http://maps.googleapis.com/maps/api/staticmap?center=${eventData.lat},${eventData.lng}&zoom=12&size=600x300&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&key=AIzaSyBkezlJl3YY3_PT6sfu4Kc99hda3az0Heg`} alt="map" />
      </div>
      <div className="event-card-footer"></div>
    </Card>
  );
};

EventCard.propTypes = {
  eventData: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default EventCard;
