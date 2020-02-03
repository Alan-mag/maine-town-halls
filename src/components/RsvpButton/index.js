import { Modal } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import {
  mapValues,
  isUndefined,
} from 'lodash';
import { firebasedb } from '../../utils/firebase';
import WrappedRsvpForm from '../RsvpForm';

import './style.scss';

class RsvpButton extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submitRsvp = this.submitRsvp.bind(this);
    this.state = {
      loading: false,
      visible: false,
    };
  }

  showModal() {
    if (!this.props.disabled) {
      this.setState({
        visible: true,
      });
    }
  }

  submitRsvp(data) {
    const {
      eventId,
    } = this.props;
    this.setState({ loading: true });
    const fullData = {
      ...data,
      eventId,
    };
    const cleanData = mapValues(fullData, (value) => {
      if (isUndefined(value)) {
        return '';
      }
      return value;
    });
    console.log('submitting:', cleanData);
    if (cleanData.family_name && cleanData.given_name && cleanData.email_address) {
      return firebasedb.ref(`rsvps/${eventId}`).push(cleanData)
        .then(() => {
          this.handleCloseOnSubmit();
        })
        .catch((error) => {
          console.log('err', error);
        });
    }
  }

  handleClose() {
    this.setState({
      visible: false,
    });
  }

  handleCloseOnSubmit() {
    this.setState({
      confirmed: true,
      loading: false,
      visible: false,
    });
  }

  render() {
    const {
      title
    } = this.props;
    const {
      confirmed,
    } = this.state;
    return (
      <div>
        <div className="rsvp-btn" onClick={this.showModal}>
          {confirmed ? 'Going' : 'RSVP'}
        </div>
        <Modal
          footer={null}
          title={title}
          visible={this.state.visible}
          onCancel={this.handleClose}
          closable
        >
          <WrappedRsvpForm
            loading={this.state.loading}
            submitRsvp={this.submitRsvp}
          />
        </Modal>
      </div>
    );
  }
}

RsvpButton.defaultProps = {
  disabled: false,
};

RsvpButton.propTypes = {
  disabled: PropTypes.bool,
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RsvpButton;
