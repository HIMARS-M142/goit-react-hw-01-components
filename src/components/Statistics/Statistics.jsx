import PropTypes from 'prop-types';
import { Stats, StatTitle, StatUl, StatsList } from './StatisticsStyled';
export const Statistics = ({ title, stats }) => {
  return (
    <Stats className="statistics">
      {title ? <StatTitle className="title"></StatTitle> : null}
      <StatUl className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsList
              key={id}
              className="item"
              style={{ backgroundColor: generateColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
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
