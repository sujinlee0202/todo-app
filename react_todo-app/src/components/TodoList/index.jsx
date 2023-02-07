import React from 'react'
import { Todo } from '../Todo'
import { TodoInput } from '../TodoInput'
import styles from './styles.module.css'

export const TodoList = () => {
  return (
    <>
      <section className={styles.section}>
        <ul className={styles.lists}>
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </section>
      <TodoInput />
    </>

  )
}
