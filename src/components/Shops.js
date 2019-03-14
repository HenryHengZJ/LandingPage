import React, { Component } from 'react';
import sprintboard from '../img/sprintboard.png';
import { Row, Col, Card, CardBody} from 'reactstrap';

class Shops extends Component {

  constructor(props) {
    super(props);

    this.state = {
      icons:
      [
        require('../img/res1.jpg'),
        require('../img/res2.jpg'),
        require('../img/res3.jpg'),
        require('../img/res4.jpg'),
        require('../img/res5.png'),
        require('../img/res6.jpg'),
      ]
    }

  }

  renderItems() {

    var itemsarray = [];

    var icons = this.state.icons

    for(let i = 0; i < icons.length; i++){
      itemsarray.push(
        <Col xs="3" sm="3" md="2" lg="2">
          <Card style={{borderWidth: 0, borderColor: 'white', boxShadow: 'none'}}>
          <CardBody style={{padding: 0, height: 100}}>
            <img className="grayscaleimg" style={{ objectFit:'cover', width: '100%', height: '100%' }} src={icons[i]}  />
          </CardBody>
          </Card>
        </Col>
      )
    }

    return(
      <Row >
        {itemsarray}
      </Row>
    )
  }

  render() {
    return (
      <section style={{ padding: 0, marginTop: 20, marginBottom: 20}} id="shops ">
        <div className="container">
         {this.renderItems()}
        </div>
      </section>
    );
  }
}

export default Shops;
