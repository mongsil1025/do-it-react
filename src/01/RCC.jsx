// RCC : 기본 리액트 컴포넌트
import React, { Component } from 'react';

class RCC extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RCC;
// RCCP : 리액트 컴포넌트를 프로퍼티 타입과 함께 생성
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RCC extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

RCC.propTypes = {

};

export default RCC;
// RCFC : 리액트 컴포넌트를 생명주기 함수와 함께 생성한다.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RCC extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

RCC.propTypes = {

};

export default RCC;

// RPC : 리액트 퓨어 컴포넌트를 생성한다.
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RCC extends PureComponent {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

RCC.propTypes = {

};

export default RCC;

// RSC : 함수형 컴포넌트를 생성한다.
import React from 'react';

const RCC = () => {
    return (
        <div>
            
        </div>
    );
};

export default RCC;

// RSCP : 함수형 컴포넌트를 프로퍼티 타입과 함께 생성한다.
import React from 'react';
import PropTypes from 'prop-types';

const RCC = props => {
    return (
        <div>
            
        </div>
    );
};

RCC.propTypes = {
    
};

export default RCC;