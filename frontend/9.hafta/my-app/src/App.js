
import React, { Component } from 'react'
import Product from './product/Product';
import ProductDetail from './product/ProductDetail';
import {Row, Col} from 'reactstrap'

 class App extends Component {
   constructor(props){
     super(props)
   }
   state = {products: [{id:1, name:"Reanult", model:2022}
   ,{id:2, name:"Volkswagen", model:2021}
   ,{id:3, name:"Fiat", model:2001}]}
  render() {
    return (
      <Row>
        <Col lg='3'>
        <Product products={this.state.products}/>
        </Col>
        <Col lg='6'>
        <ProductDetail/>
        </Col>
      </Row>
    )
  }
}

export default App;