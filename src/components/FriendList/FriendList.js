import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>        
        {friends.map(({ id, name, avatar, isOnline }) => (
            <FriendListItem 
                key={id}
                name={name} 
                avatar={avatar}
                isOnline={isOnline}
            />
        )
        )}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

export default FriendList;