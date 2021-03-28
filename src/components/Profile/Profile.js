import PropTypes from 'prop-types';
// import React from 'react';
import defaultImage from './noimage.jpg' 
import StatsItem from './StatsItem';
import styles from './Profile.module.css'

const Profile = ({ name, avatar, tag, location, stats }) => (
<div className={styles.profile}>
  <div>
    <img className={styles.avatar} src={avatar} alt="Аватар пользователя" width="320"/>
  </div>
  <p className={styles.name}>{name}</p>
  <p className={styles.tag}>@{tag}</p>
  <p className={styles.location}>{location}</p>
  <ul className={styles.stats}>
    {Object.entries(stats).map(([label, value]) => (
      <StatsItem 
      key={label}
      label={label}
      value={value}
      />    
    ))}
  </ul>
</div>
)

Profile.defaultProps = {
  url: defaultImage
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Profile;