import React, { useState } from 'react';
import './App.css';
import Router from './Navigation/router';
import Header from './Containers/Header/Index';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="App">
      <Header />
      <div className="container" style={{marginTop: 75}}>
        <Router></Router>
      </div>
      <Button variant="primary" onClick={()=>{handleShow()}}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
