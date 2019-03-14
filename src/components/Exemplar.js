import React from 'react';
import sprintboard from '../img/sprintboard.png';
import { Button, Row, Col, FormGroup, Form, Label, Input, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div style={{opacity: 0.2, backgroundColor: 'gray', borderWidth: 1}} className="col l1"></div>
          <div style={{marginTop: 60}} className="center-align">
            <h2 style={{fontSize: 34}}>Catering for various occasions</h2>
            <Row style={{marginTop: 50}}>
              <Col xs="12" md="5">
                <img style={{ objectFit:'cover', width: '100%', height: '80%' }} src={'https://i.pinimg.com/originals/80/87/23/80872398c450a4c9f9601b0025e844b7.png'} />
              </Col>
            
              <Col xs="12" md="7">
                <img className="responsive-img" src={sprintboard} />
              </Col>

            </Row>
            
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
