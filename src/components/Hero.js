import React from 'react';
import corporate_lunch from '../img/corporate_lunch.jpg';
import '../../styles/styles.css'
import { Button, Row, Col, FormGroup, Form, Label, Input, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ marginTop: -70, backgroundImage: 'url(' + corporate_lunch + ')', backgroundSize: 'cover'}}
    >
      <div className="darkoverlay">
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          
          <h2 style={{fontSize: 40}}>
            All you need for corporates catering
          </h2>

          <p style={{fontSize: 18, letterSpacing: 2, marginTop: 20}} className="big">
            Order catering from wide variety of restaurants and pubs nationwide.
          </p>

          <Label className="h6" style={{letterSpacing: 2, fontSize: 18, display:'flex', flex: 1, color: 'white', fontSize: 15, marginTop: 40}} >Delivery Address</Label>
          <Row>
            <Col style={{padding: 0}} xs="10" md="10">
              <Input style={{padding: 20}} type="select" name="address" id="address">
                <option value="1">1</option>
                <option value="2">2</option>
              </Input>
            </Col>
          
            <Col style={{padding: 0}} xs="2" md="2">
              <Button style={{height: '100%'}} color="primary">SEARCH</Button>
            </Col>
          </Row>

        </div>

        
          

        

      </div>
      </div>
    </section>
  );
};

export default Hero;
