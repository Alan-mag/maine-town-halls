import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from 'antd';

const { Paragraph, Title } = Typography;

const RsvpSuccess = ({ handleCloseSuccess }) => {
  return (
    <div>
      <div>
        <Typography>
          <Title level={4}>Thank you for your RSVP!</Title>
          <Paragraph strong>
            Help us spread the word -- and send a strong message of accountability to Senator Collins -- by sharing the Facebook event for this town hall: <a href="https://www.facebook.com/events/811359416049020/" target="_blank">Facebook Event Link</a>
          </Paragraph>
        </Typography>
        <Button type="primary" onClick={handleCloseSuccess}>Close</Button>
      </div>
    </div>
  )
}

RsvpSuccess.defaultProps = {
  handleCloseSuccess: PropTypes.func,
};

RsvpSuccess.propTypes = {
  handleCloseSuccess: PropTypes.func.isRequired
};

export default RsvpSuccess;