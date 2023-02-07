import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Todo } from '../Todo'
import { TodoInput } from '../TodoInput'
import styles from './styles.module.css'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('/data/todo.json')
    .then(res => setTodos(res.data))
    // fetch(`data/todo.json`)
    // .then(res => res.json())
    // .then((data) => {
    //   setTodos(data)
    // })

    return () => { 
      console.log('component unmount')
    }
  }, [])

  console.log(todos)

  const handleAddTodo = useCallback((data) => {
    console.log(data)
    setTodos(todo => [...todo, data])
  }, [])

  return (
    <>
      <section className={styles.section}>
        <ul className={styles.lists}>
          {todos.map((todo , index) => (
            <Todo todo={todo} key={index} />
          ))}
        </ul>
      </section>
      <TodoInput addTodo={handleAddTodo}/>
    </>
  )
}