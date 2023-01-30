import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import './details.css';

function checkPossible(data){
    if (data.existingLink) {
        return (
            <a href={data.link} className='btn' target='_blank' >More Info</a>
        )

        } else {
            return (
                <Button variant="primary" disabled >
                Details coming soon
              </Button>
            )
        }
}
function MyVerticallyCenteredModal(props) {
    return (
    <div className="test">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title className="test" id="contained-modal-title-vcenter">
            {props.data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="test">
          <p>
            {props.data.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
            {
                checkPossible(props.data)
            }
            <Button className="test" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  
  function DisplayModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Details
        </Button>
  
        <MyVerticallyCenteredModal
          data={props.data}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  
  export default DisplayModal;