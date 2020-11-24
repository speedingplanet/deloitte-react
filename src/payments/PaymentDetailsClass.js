import React, { Component } from 'react';

export default class PaymentDetailsClass extends Component {
  render() {
    const { payor, payee, amount, reason } = this.props;

    return (
      <div>
        <p>
          {payor} paid {payee} {amount} for {reason}.
        </p>
      </div>
    );
  }
}
