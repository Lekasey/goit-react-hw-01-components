import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types'

const TransactionHistory = ({items}) => (
    <table >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
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