import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './experience.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './exp_details.css'

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
            <div className="modal_title">
                <div className="modal_title_items">
                    <img className ="modalImage" src={props.data.image} alt="" />
                </div>
                <div className="modal_title_items">
                    {props.data.title}
                    <h6>{props.data.subtitle}  </h6>
                    <div className="modal_date">
                        {props.data.date}
                    </div>
                    
                </div>
                
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="test">
          <p>
            {props.data.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
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
          data = {props.data}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  
  export default DisplayModal;