import React, { Component } from 'react';
import axios from 'axios';
import Instrument from './Instrument';

class InstrumentsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {instruments: []};
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/instruments')
    .then(resp => this.setState({instruments: resp.data}))
    .catch(err => console.log(err));
  };

  render() {
    const instrumentsList = this.state.instruments.map(({id,position,calls,doubling,principle,concertmaster_principle_doubling,fee}) => {
      return(<Instrument key={id} id={id} position={position} calls={calls} />)
    });

    return (
      <div>
      <h1>Instruments:</h1>
      <div>{instrumentsList}</div>
      </div>
    );
  };
};

export default InstrumentsContainer;
