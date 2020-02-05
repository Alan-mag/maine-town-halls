import { Modal } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import {
  mapValues,
  isUndefined,
} from 'lodash';
import { firebasedb } from '../../utils/firebase';
import WrappedRsvpForm from '../RsvpForm';
import RsvpSuccess from '../RsvpSuccess';

import './style.scss';

class RsvpButton extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseSuccess = this.handleCloseSuccess.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.submitRsvp = this.submitRsvp.bind(this);
    this.state = {
      confirmed: false,
      loading: false,
      modalVisible: false,
    };
  }

  showModal() {
    if (!this.props.disabled) {
      this.setState({
        modalVisible: true,
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
          setTimeout(() => {
            this.handleSuccess();
          }, 1000);
        })
        .catch((error) => {
          console.log('err', error);
        });
    }
  }

  handleClose() {
    this.setState({
      modalVisible: false,
    });
  }

  handleSuccess() {
    this.setState({
      confirmed: true,
      loading: false,
    })
  }

  handleCloseSuccess() {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const {
      title
    } = this.props;
    const {
      confirmed,
    } = this.state;
    let content;
    if (confirmed) {
       content = <RsvpSuccess handleCloseSuccess={this.handleCloseSuccess} />;
    } else {
      content =
        <WrappedRsvpForm
          loading={this.state.loading}
          submitRsvp={this.submitRsvp}
        />;
    }
    return (
      <div>
        <div className="rsvp-btn" onClick={this.showModal}>
          {confirmed ? 'Going' : 'RSVP'}
        </div>
        <Modal
          footer={null}
          title={title}
          visible={this.state.modalVisible}
          onCancel={this.handleClose}
          closable
        >
          {content}
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
