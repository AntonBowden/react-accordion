import React, { Component } from 'react';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
}

class Block extends Component {
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
      <section>
        <h2 onClick={ this.toggle }>{this.props.heading}</h2>
        <p style={ stateStyle }> {this.props.content} </p>
      </section>
    )
  }
}

export default Block;
