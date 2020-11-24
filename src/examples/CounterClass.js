import React, { Component } from 'react';

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 5,
      counterColor: 'white',
    };
  }

  handleIncrementClick = () => {
    this.setState({
      counterValue: this.state.counterValue + 1,
      counterColor: 'green',
    });
  };

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-3 text-center">
            <p>{this.state.counterValue}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>
              <button className="btn btn-primary">Decrement</button>&nbsp;
              <button
                className="btn btn-info"
                onClick={this.handleIncrementClick}
              >
                Increment
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
