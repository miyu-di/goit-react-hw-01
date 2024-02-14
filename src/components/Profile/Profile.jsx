import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.infoContain}>
        <img src={image} alt="User avatar" className={css.avatarProfile} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.listStats}>
        <li className={css.statInfo}>
          <span>Followers</span>
          <span className={css.statData}>{stats.followers}</span>
        </li>
        <li className={css.statInfo}>
          <span>Views</span>
          <span className={css.statData}>{stats.views}</span>
        </li>
        <li className={css.statInfo}>
          <span>Likes</span>
          <span className={css.statData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
