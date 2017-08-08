import React, { Component } from 'react';
import logo from './logo.svg';
import './Accordion.css';


const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
}

class Accordion extends Component {

  constructor() {
    super();
    this.state = {
      active: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    return (
      <div className="Accordion">

          {this.props.data.map((block, index) => (
            <section key={index}>
              <h2 onClick={ this.toggle }>{block.heading}</h2>
              <p style={ stateStyle }> {block.content} </p>
            </section>
          ))}

      </div>
    );
  }
}



export default Accordion;
