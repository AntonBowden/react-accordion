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
      <section>
        <h2 className={this.state.className} onClick={ this.toggle }>{this.props.heading}</h2>
        <p className={this.state.className}> {this.props.content} </p>
      </section>
    )
  }
}

export default Block;
