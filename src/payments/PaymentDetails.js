import React, { useState } from 'react';

const PaymentDetails = ({ transaction, toggleCleared }) => {
  const { payor, payee, amount, reason, cleared } = transaction;

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
