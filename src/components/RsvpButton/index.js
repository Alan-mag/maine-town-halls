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
      formVisible: true,
      loading: false,
      modalVisible: false,
      successVisible: false,
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
      formVisible: false,
      successVisible: true
    })
  }

  handleCloseSuccess() {
    this.setState({
      confirmed: true,
      loading: false,
      modalVisible: false,
    });
  }

  render() {
    const {
      title
    } = this.props;
    const {
      confirmed,
      formVisible,
      successVisible
    } = this.state;
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
          {
            formVisible &&
              <WrappedRsvpForm
                loading={this.state.loading}
                submitRsvp={this.submitRsvp}
                formVisible={this.state.formVisible}
              />
          }
          {
            successVisible &&
              <RsvpSuccess handleCloseSuccess={this.handleCloseSuccess} />
          }
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
