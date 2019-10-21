import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    //initialize my app state
    this.state = {
      count: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState(state =>{
      return {
       count: state.count + 1,
      }
      });
  };

  handleButtonClickDown = e => {
    e.preventDefault();
    this.setState(state =>{
      return {
       count: state.count - 1,
      }
      });
  };

  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.handleButtonClick}>Click Me</button>
        <button onClick={this.handleButtonClickDown}>Click Me -1</button>
      </div>
    );
  }
}

export default Counter;