import React, { Component } from 'react';
import Block from './Block';
import logo from './logo.svg';
import './Accordion.css';


class Accordion extends Component {

  render() {
    return (
      <div className="Accordion">
          {this.props.data.map((block, index) => (
            <Block key={index} heading={block.heading} content={block.content} />
          ))}
      </div>
    );
  }
}

export default Accordion;
