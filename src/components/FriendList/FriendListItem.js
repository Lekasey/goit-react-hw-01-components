import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline}) => (
    <li>
        <span>{isOnline? "green": "red"}</span>
        <img src={avatar} alt="" width="48" />
        <p>{name}</p>
    </li>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;