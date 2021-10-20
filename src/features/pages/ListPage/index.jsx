import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from "query-string"
import TodoForm from 'features/components/TodoForm';
// import TodoForm from '../../components/TodoForm';
function ListPage(props) {
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  // giống như gõ window.location
  const [filterStatus,setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search)
    console.log(params); // tương đương với việc gõ windows.location.search
    return params.status ||  'all'
  })
  const todoListInit = [
    {
      'id': 1,
      'title': 'Eat',
      'status': 'completed'
    },
    {
      'id': 2,
      'title': 'Code',
      'status': 'completed'
    },
    {
      'id': 3,
      'title': 'Sleep',
      'status': 'new'
    }
  ]
  const [todoList,setTodo] = useState(todoListInit)
  const handleclick = (todo,idx) => {
    const newTodoList = [...todoList]
    newTodoList[idx] = {
      ...newTodoList[idx],
      'status': newTodoList[idx].status === '' ? 'completed' : ''
    }
    setTodo(newTodoList)
  }
  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilterStatus(params.status || 'all')
  },[location.search])
  const handleShowAll = () => {
    // setFilterStatus('all')
    const queryPram = {status: 'all'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryPram)
    })
  }
  const handleShowSelected = () => {
    // setFilterStatus('completed')
    const queryPram = {status: 'completed'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryPram)
    })
  }
  const handleShowNoneSelected = () => {
    // setFilterStatus('')
    const queryPram = {status: 'new'}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryPram)
    })
  }

  const todoRender = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status)
  const handleOnsubmit = (values) => {
    const newTodo = {
      'id': todoList.length,
      'title': values.title,
      'status': 'new'
    }
    const newTodoList = [...todoList,newTodo]
    setTodo(newTodoList)
  }
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleOnsubmit}/>

      <TodoList onlickfun={handleclick} todoList={todoRender}></TodoList>
      <button onClick={handleShowAll}>ShowAll</button>
      <button onClick={handleShowSelected}>Show Selected</button>
      <button onClick={handleShowNoneSelected}>Show NOn Selected</button>
    </div>
  );
}

export default ListPage;