import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.title}>
        <tr>
          <th className={s.text}>Type</th>
          <th className={s.text}>Amount</th>
          <th className={s.text}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.row} key={id}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
