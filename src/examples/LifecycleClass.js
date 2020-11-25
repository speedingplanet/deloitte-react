import React, { Component } from 'react';
import { dao } from '@speedingplanet/rest-server';

export default class LifecycleClass extends Component {
  // Runs once (1)
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  // Runs once (3)
  componentDidMount() {
    // Data fetching (among other things) should go here.
    dao
      .findAllUsers()
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => console.error('FAILED!: ', error));
  }

  // Runs many times (probably) (4)
  componentDidUpdate() {
    if (foo != previousFoo) {
    }
  }

  // Runs many times (probably) (2) (5)
  render() {
    return <div></div>;
  }

  // Runs once (last)
  componentWillUnmount() {}
}
