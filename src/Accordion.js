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
      active: false
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
        <section>
          <h2 onClick={ this.toggle }> {this.props.heading} </h2>
          <p style={ stateStyle }> {this.props.content} </p>
        </section>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   heading: React.propTypes.string.isRequired,
//   content: React.propTypes.string.isRequired
// }

export default Accordion;
