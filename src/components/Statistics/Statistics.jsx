import PropTypes from 'prop-types';
import { Stats, StatTitle, StatUl, StatsList } from './StatisticsStyled';
export const Statistics = ({ title, stats }) => {
  return (
    <Stats className="statistics">
      <StatTitle className="title">{title}</StatTitle>

      <StatUl className="stat-list">
        {stats.map(stat => {
          return (
            <StatsList
              key={stat.id}
              className="item"
              style={{ backgroundColor: generateColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage"> {stat.percentage}%</span>
            </StatsList>
          );
        })}
      </StatUl>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
