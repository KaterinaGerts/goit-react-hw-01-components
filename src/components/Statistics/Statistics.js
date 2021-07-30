import PropTypes from 'prop-types';
import s from 'components/Statistics/Statistics.module.css';
import generateColor from 'components/Statistics/RandomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(elem => (
          <li
            className={s.item}
            key={elem.id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={s.label}>{elem.label}</span>
            <span className={s.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
