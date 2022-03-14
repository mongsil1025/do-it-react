import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter;
