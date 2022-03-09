import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodaysPlan extends Component {
  render() {
    const { isDone, name } = this.props;
    return (
      <div className="message-container">
        <p style={isDone ? { color: 'red' } : { color: 'black' }}>{name}</p>
      </div>
    );
  }
}

TodaysPlan.propTypes = {
  name: PropTypes.string,
  isDone: PropTypes.bool,
  date: PropTypes.string.isRequired,
};

TodaysPlan.defaultProps = {
  isDone: false,
};

export default TodaysPlan;
