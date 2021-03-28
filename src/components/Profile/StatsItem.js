// import React from 'react';
import styles from './StatsItem.module.css'
import PropTypes from 'prop-types';


const StatsItem = ({ label, value }) => (
<li>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{value}</span>
</li>
)

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default StatsItem;