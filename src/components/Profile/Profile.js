import defaultImage from './img.jpg';
import s from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({
  name,
  tag = 'тега нет',
  location,
  avatar = defaultImage,
  stats,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
