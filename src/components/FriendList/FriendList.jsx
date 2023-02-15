import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.friend}>
            {friends.map(({ id, avatar, name, isOnline }) => 
                <li key={id} className={css.item}>
                    <span className={isOnline ? css.online : css.status}>{isOnline}</span>
                    <img src={avatar} alt={name} width="48" className={css.avatar} />
                    <p className={css.name}>{name}</p>
                </li>
            )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired

    }))
};