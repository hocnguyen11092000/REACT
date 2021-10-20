import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux'
import { decrease, increase } from './counterSlice';

Counter.propTypes = {
  
};

function Counter(props) {
  const counter = useSelector(state => state.counter)
  const dispadth = useDispatch()
  const hanhdleIncreate = () => {
    const action = increase()
    dispadth(action)
  }
  const hanhdleDecreate = () => {
    const action = decrease()
    dispadth(action)
  }
  return (
    <div>
      Counter : {counter}
      <div>
        <button onClick={hanhdleIncreate}>Tăng</button>
        <button onClick={hanhdleDecreate}>Giảm</button>
      </div>
    </div>
   
  );
}

export default Counter;