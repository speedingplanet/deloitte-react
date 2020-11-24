import React, { useState, useEffect } from 'react';
import { dao } from '@speedingplanet/rest-server';

export default function PaymentsManager() {
  const [txCount, setTxCount] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const txPromise = dao.findAllTransactions();

    txPromise
      .then(({ data }) => setTxCount(data.length))
      .catch((error) => console.error('FAILED!: ', error));
  }, [refresh]);

  return (
    <div>
      <h2>Welcome to the Payements Manager</h2>
      <h3>There are {txCount} transactions</h3>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setRefresh(!refresh)}
        >
          Refresh
        </button>
      </div>

      {/*
      <section className="row">
        <div className="col">
          <PaymentDetails
            transaction={clearedTransaction}
            toggleCleared={handleToggleCleared}
          />
          <PaymentDetails
            transaction={pendingTransaction}
            toggleCleared={handleToggleCleared}
          />
        </div>
      </section>
      */}
    </div>
  );
}
