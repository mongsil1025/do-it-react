import React, { Component } from 'react';
// 아래 머터리얼 스타일 설정을 삭제합니다.
// import './materialize.scss';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import StateExample from './03/StateExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png"/>
        <h1 className='title'>Do it! React</h1>
        <TodaysPlan name="놀러가자" date="2022-03-10" isDone/>
        <StateExample/>
      </div>
    );
  }
}

export default App;