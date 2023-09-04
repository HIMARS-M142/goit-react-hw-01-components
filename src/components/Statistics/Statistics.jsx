import PropTypes from 'prop-types';
import { Stats, StatTitle, StatUl, StatsList } from './StatisticsStyled';
export const Statistics = ({ title, stats }) => {
  return (
    <Stats className="statistics">
      {title ? <StatTitle className="title">{title}</StatTitle> : null}
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

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
