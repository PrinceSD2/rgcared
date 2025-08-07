import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessModal = ({ isOpen, toggle, message }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} backdrop="static" fade={false}>
      <ModalHeader toggle={toggle}>Thank You for Reaching Out!</ModalHeader>
      <ModalBody>{message || 'Your message has been successfully delivered. Our team will contact you shortly.'}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SuccessModal;
