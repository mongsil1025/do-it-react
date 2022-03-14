# do-it-react

Practice React

# 컴포넌트의 생명주기

- constructor(props) 함수
  - 항상 super() 함수를 가장 위에 호출해야 한다.
  ```
  constructor(props) {
      super(props);
      // 이후에 추가적인 state 데이터 혹은 변수를 선언한다.
  }
  ```
- render() 함수
  - 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수
- static getDerivedStateFromProps(props, state) 함수
  - 정적함수이다. 따라서 함수 안에서 `this.props` 나 `this.state`와 같은 방법으로 값에 접근할 수 없다.
  - 반드시 전달된 파라미터 (props, state) 값을 이용하자.
  - `props` 는 상위 컴포넌트에서 전달된 값이며, `state`는 현재 컴포넌트의 state값이다.
- componentDidMount() 함수
  - render() 함수가 JSX를 화면에 그린 이후에 호출되는 함수이다. 만약 컴포넌트가 화면에 모두 표현된 이후 해야하는 작업들은 여기서 하면 된다.
- shouldComponentUpdate(nextProps, nextSate) 함수
  - state 값이 변경되면 '화면을 새로 출력해야 하는지' 판단하는 함수이다.
  - 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 많이 준다.
  - `forceUpdate()` 함수를 호출하면, 이 함수는 호출되지 않는다.
- getSnapshotBeforeUpdate(prevProps, prevState) 함수
  - 컴포넌트의 변경된 내용이 가상화면에 완성된 이후 호출되는 함수이다.
  - 실제 화면에 출력되기 전에 호출되므로 DOM 정보에 접근할 때 사용된다.
- componentDidUpdate(prevProps, prevState, snapshot) 함수
  - 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수이다.
  - 스크롤 위치를 옮기거나 커서를 이동시키는 등의 DOM 정보를 변경할 때 사용된다.
- componentWillUnmount() 함수
  - 컴포넌트가 소멸되기 직전에 호출되는 함수이다.
  - 컴포넌트에서 감시하고 있는 작업들을 해제할 때 필요한 함수이다.
  - 메모리 누수 현상을 막기 위해 잘 생각해야 한다.

# 컴포넌트 종류

- Component
  - 프로퍼티, state, 생명주기 함수가 들어있는 구조의 컴포넌트
- PureComponent
  - `shouldComponentUpdate()` 함수를 '얕은 비교'를 하고 render()한다.
- SFC(Stateless Functional Component) : 함수형 컴포넌트
  - 데이터를 받아 출력할 컴포넌트를 반환한다.
