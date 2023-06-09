import css from './transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.TransactionHistory}>
      <thead className={css.header}>
        <tr>
          <th className={css.headerItem}>Type</th>
          <th className={css.headerItem}>Amount</th>
          <th className={css.headerItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.bodyItem}>{transaction.type}</td>
            <td className={css.bodyItem}>{transaction.amount}</td>
            <td className={css.bodyItem}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
