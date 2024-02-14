import clsx from "clsx";
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = clsx(css.textSize, isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.friendInfo}>
      <img src={avatar} className={css.img} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusColor}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
