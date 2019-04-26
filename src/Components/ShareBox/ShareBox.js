import React, { Component } from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  EmailIcon
} from 'react-share';
import { Modal, Button } from 'react-bootstrap';
import "./ShareBox.css";

export default class extends Component {
  render() {
    const { url } = this.props;
    return(
        <Modal
        show = {this.props.show}
        onHide = {this.props.close}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="share-buttons">
        <FacebookShareButton
          url={url}
        >
        <FacebookIcon
          size={40}
          round={false} />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
        >
        <TwitterIcon
          size={40}
          round={false} />
        </TwitterShareButton>

        <GooglePlusShareButton
          url={url}
        >
        <GooglePlusIcon
          size={40}
          round={false} />
        </GooglePlusShareButton>

        <EmailShareButton
          url={url}
        >
        <EmailIcon
          size={40}
          round={false} />
        </EmailShareButton>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>

        </Modal>
      )
  }
}
