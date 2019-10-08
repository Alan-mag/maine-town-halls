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
      eventAddress,
    } = this.props;
    const {
      confirmed,
    } = this.state;
    const modalTitle = eventAddress.includes('Desert') ? 'Town Hall for Bar Harbor' : 'Town Hall for Lewiston';
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

RsvpButton.defaultProps = {
  disabled: false,
};

RsvpButton.propTypes = {
  disabled: PropTypes.bool,
  eventAddress: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
};

export default RsvpButton;
