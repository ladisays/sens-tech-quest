import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class QuestionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "I've been clicked: ",
      counter: 0
    };
  }

  handleOnClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    const { label, counter } = this.state;

    return (
      <div style={{ marginTop: 48 }}>
        <Button variant="contained" onClick={this.handleOnClick}>
          {label} {counter} times
        </Button>
      </div>
    );
  }
}

export default QuestionOne;
