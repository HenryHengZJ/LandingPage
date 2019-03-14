import React from 'react';
import { Button } from 'reactstrap';

const Features = () => {
  return (
    <section id="features" className="white lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="center-align">
            <h2 style={{fontSize: 34}}>Order catering service with FoodieBee</h2>
          </div>
          <div className="col m3"></div>
        </div>
        <div style={{paddingTop: 40}} className="row">
          <div className="col m3 center-align">
            <img style={{ objectFit:'cover', width: 80, height: 80 }} src={require('../img/register.png')}  />
            <h5 style={{marginTop: 20}} >Register Account</h5>
          </div>
          <div className="col m3 center-align">
            <img style={{ objectFit:'cover', width: 80, height: 80 }} src={require('../img/search.png')}  />
            <h5 style={{marginTop: 20}}>Search and Filter</h5>
          </div>
          <div className="col m3 center-align">
            <img style={{ objectFit:'cover', width: 80, height: 80 }} src={require('../img/bank.png')}  />
            <h5 style={{marginTop: 20}}>Order and Pay</h5>
          </div>
          <div className="col m3 center-align">
            <img style={{ objectFit:'cover', width: 80, height: 80 }} src={require('../img/eat.png')}  />
            <h5 style={{marginTop: 20}}>Enjoy and Eat</h5>
          </div>
        </div>
        <div className="center-align">
          <Button style={{height: '100%', marginTop: 30, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20}} size="lg" color="primary">Find Food Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
