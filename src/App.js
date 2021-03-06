import React, { Component } from 'react';
// 아래 머터리얼 스타일 설정을 삭제합니다.
import './sass/materialize.scss';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import StateExample from './03/StateExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import ListExample from './03/ListExample';
import TodoList from './03/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.resetCount = this.resetCount.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({count}) => ({count: count + 1}));
  }
  resetCount() {
    this.setState(({count}) => ({count: count + 10}));
  }
  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <div>두잇! 리액트 시작하기</div>
          </div>  
        </nav>
        <div>
          <img src="http://www.easyspub.co.kr/images/logo_footer.png"/>
          <h1 className='title'>Do it! React</h1>
          <TodaysPlan name="놀러가자" date="2022-03-10" isDone/>
          <StateExample/>
        </div>
        <div>
          <Counter count={this.state.count} onAdd={this.increaseCount}/>
          <NewCounter count={this.state.count}/>
          <button onClick={this.resetCount}>{this.state.count + 10} 으로 초기화</button>
          <ListExample/>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;