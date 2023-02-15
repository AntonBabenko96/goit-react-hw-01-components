import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.status}>{isOnline}</span>
      <img src={avatar} alt={name} width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
