import TransactionItem from '../TransactionItem/TransactionItem';
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => (
    <table className={styles.table} >
  <thead className={styles.tableHead}>
    <tr className={styles.tableHead}>
      <th className={styles.columnName}>Type</th>
      <th className={styles.columnName}>Amount</th>
      <th className={styles.columnName}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(( { id, type, amount, currency}) => (
        <TransactionItem 
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            />
    ))}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TransactionHistory;