import { Modal } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

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
    this.setState({
      visible: true,
    });
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

    if (data.family_name && data.given_name && data.email_address) {
      firebasedb.ref(`rsvps/${eventId}`).push(fullData)
        .then(() => {
          this.handleCloseOnSubmit();
        })
        .catch((error) => {
          console.log('err', error);
        });
    }
  }

  handleClose(e) {
    this.setState({
      visible: false,
    });
  }

  handleCloseOnSubmit(e) {
    this.setState({
      confirmed: true,
      loading: false,
      visible: false,
    });
  }

  render() {
    const {
      eventAddress,
    } = this.props;
    const {
      confirmed,
    } = this.state;
    const modalTitle = eventAddress.includes('Portland') ? 'Town Hall for Portland, Maine.' : 'Town Hall for Bangor, Maine';
    return (
      <div>
        <div className="rsvp-btn" onClick={this.showModal}>
          {confirmed ? 'Going' : 'RSVP'}
        </div>
        <Modal
          footer={null}
          title={modalTitle}
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

RsvpButton.propTypes = {
  eventId: PropTypes.string.isRequired,
  eventAddress: PropTypes.string.isRequired,
};

export default RsvpButton;
