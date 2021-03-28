// import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css'


const StatisticsItem = ({ label, percentage }) =>  (
<li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
</li>
)

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsItem;