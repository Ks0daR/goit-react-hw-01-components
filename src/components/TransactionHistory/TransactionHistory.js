import React from 'react';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <Transaction items={items} />
      </tbody>
    </table>
  );
}

export default TransactionHistory;
