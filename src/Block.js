import React, { Component } from 'react';
import './Block.css';


class Block extends Component {
  constructor() {
    super();
    this.state = {
      className: 'inactive'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const newState = this.state.className === 'inactive' ? 'active' : 'inactive';
    this.setState({

      className: newState
    });
  }

  render() {

    return (
      <section className={this.state.className}>
        <h2 className={this.state.className} onClick={ this.toggle }>{this.props.heading} <span><i></i></span></h2>
        <p className={this.state.className}> {this.props.content} </p>
      </section>
    )
  }
}

export default Block;
