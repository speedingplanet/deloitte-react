import React, { useState } from 'react';

// rcc -> Class component
// rfc -> Functional component
// rafc -> Functional component (arrow style)

// const PaymentDetails = (props) => {
// let { payor, payee, amount, reason } = props.transaction;
// const PaymentDetails = ({ transaction: { payor, payee, amount, reason } }) => {
const PaymentDetails = ({ transaction, toggleCleared }) => {
  const { payor, payee, amount, reason, cleared } = transaction;

  // Two-element array -> tuple
  const [hidePayee, setHidePayee] = useState(true);

  function clickHandler() {
    console.log('You clicked on the button.');
    toggleCleared();
  }

  let classes = '';
  if (hidePayee) {
    classes = 'hidden';
  }

  function handleShowPayee() {
    // hidePayee = !hidePayee;
    setHidePayee(!hidePayee);
  }

  return (
    <div>
      <p>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={clickHandler}
        >
          Toggle
        </button>
        &nbsp;
        <button
          className="btn btn-sm btn-danger"
          type="button"
          onClick={handleShowPayee}
        >
          {hidePayee ? 'Show' : 'Hide'} payee
        </button>
        &nbsp;
        {cleared ? '✅' : '❌'} {payor} paid{' '}
        <span className={classes}>{payee}</span> {amount} for {reason}.
      </p>
    </div>
  );
};

export default PaymentDetails;
