import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li className={css.friendCard} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="148" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.friendOn}>Online</p>
      ) : (
        <p className={css.friendOff}>Offline</p>
      )}
    </div>
  );
};

export default FriendList;
