import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './style.scss'
TodoList.propTypes = {
  TodoList: PropTypes.array,
  onlickfun: PropTypes.func,
};

TodoList.defaultProps = {
  TodoList: [],
  onlickfun: null
}
function TodoList({todoList,onlickfun}) {
  const handleClick = (todo,idx) => {
    if(!onlickfun) return
    onlickfun(todo,idx)
  }
  return (
    <ul>
      {
        todoList.map((todo,idx) => (
          <li className={classnames({
            completed: todo.status === 'completed'
          })} onClick={()=> {handleClick(todo,idx)}} key={todo.id}>{todo.title}</li>
         ))
      }
    </ul>
  );
}

export default TodoList;