import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const Statistics = ({ title, data }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {data.map(({ id, label, percentage }) =>
                    <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                )}
               
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};