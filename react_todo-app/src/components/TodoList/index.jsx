import React, { useCallback, useEffect, useState } from 'react'
import { Todo } from '../Todo'
import { TodoInput } from '../TodoInput'
import styles from './styles.module.css'

export const TodoList = ({ filter }) => {
  const readTodo = useCallback(() => {
    const localTodo = localStorage.getItem('todos')

    return localTodo ? JSON.parse(localTodo) : [];
  }, [])

  const [todos, setTodos] = useState(readTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

    // axios.get('/data/todo.json')
    // .then(res => setTodos(res.data))

    // fetch(`data/todo.json`)
    // .then(res => res.json())
    // .then((data) => {
    //   setTodos(data)
    // })

    return () => { 
      console.log('component unmount')
    }
  }, [todos])

  const handleAddTodo = useCallback((data) => {
    console.log(data)
    setTodos(todo => [...todo, data])
  }, [])

  const handleDeleteTodo = useCallback((deleted) => {
    setTodos(todo => [...todo].filter(todo => todo.id !== deleted.id))
  }, [])

  const handleUpdateTodo = useCallback((updated) => {
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo))
  }, [todos])

  const handleEditTodo = useCallback((todos) => {
    setTodos(todos)
  }, [])

  const getFilterItems = (todos, filter) => {
    if(filter === 'all') return todos;
    else if(filter === 'active') {
      return todos.filter(todo => todo.completed === false)
    } else return todos.filter(todo => todo.completed === true)
  }

  const filtered = getFilterItems(todos, filter)

  return (
    <>
      <section className={styles.section}>
        <ul className={styles.lists}>
          {filtered.map((todo , index) => (
            <Todo todo={todo} todos={todos} key={index} deleteTodo={handleDeleteTodo} updateTodo={handleUpdateTodo} editTodo={handleEditTodo} />
          ))}
        </ul>
      </section>
      <TodoInput addTodo={handleAddTodo} />
    </>
  )
}