import React, { Component } from 'react';
import axios from 'axios';
import Production from './Production';

class ProductionsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {productions: []};
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/productions')
    .then(resp => this.setState({productions: resp.data}))
    .catch(err => console.log(err));
  };

  render() {
    const productionsList = this.state.productions.map((prod, index) => {
      return(<Production key={index} name={prod.name} />)
    });

    return (
      <div>
      <h1>Productions:</h1>
      {productionsList}
      </div>
    );
  };
};

export default ProductionsContainer;
