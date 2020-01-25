import React from 'react';

function TransactionHistory ({ items }) {
  console.log(items);
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(prop => (
        <tbody key={prop.id}>
          <tr>
            <td>{prop.type}</td>
            <td>{prop.amount}</td>
            <td>{prop.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default TransactionHistory;
