// import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem'
import styles from './Statistics.module.css'

 


const Statistics = ({ title, stats }) => (
<section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}    
    <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
        <StatisticsItem
                key={id}
                label={label} 
                percentage={percentage}
        />
        ))}    
    </ul>
</section>
)

Statistics.defaultProps = {
    title: "",
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired
    })).isRequired    
}


export default Statistics;