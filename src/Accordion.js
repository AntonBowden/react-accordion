import React, { Component } from 'react';
import Block from './Block';
import './Accordion.css';


class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {

    const url = 'http://design.propcom.co.uk/buildtest/accordion-data.json'
    const that = this;

    fetch(url)
    .then(response => response.json())
    .then(data => that.setState({ data: data.blocks }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Accordion">
          {this.state.data.map((block, index) => (
            <Block key={index} heading={block.heading} content={block.content} />
          ))}
      </div>
    );
  }
}

export default Accordion;
