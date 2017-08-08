import React, { Component } from 'react';
import logo from './logo.svg';
import './Accordion.css';

class Accordion extends Component {
  render() {
    return (
      <div className="Accordion">
        <section>
          <h2>{this.props.heading}</h2>
          <p>{this.props.content}</p>
        </section>
      </div>
    );
  }
}

export default Accordion;
