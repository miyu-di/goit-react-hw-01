import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tablet}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={css.columns}>
            <td className={css.infoTabl}>{transaction.type}</td>
            <td className={css.infoTabl}>{transaction.amount}</td>
            <td className={css.infoTabl}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
