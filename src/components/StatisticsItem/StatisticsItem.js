// import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css'


const randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

const StatisticsItem = ({ label, percentage }) =>  (
<li className={styles.item} style={{backgroundColor: randomColor()}}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
</li>
)

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsItem;