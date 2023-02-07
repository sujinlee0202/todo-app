import React, { useCallback, useState } from 'react'
import styles from './styles.module.css'
import { FiPlus } from 'react-icons/fi'
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = useCallback((e) => {
    const todo = { id: uuidv4(), text: text, completed: 'false'}
    e.preventDefault()
    console.log('submit button', text)
    addTodo(todo)
    setText('')
  }, [text, addTodo])

  const onChangeInput = useCallback((e) => {
    setText(e.target.value)
  }, [])

  return (
    <form 
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <div className={styles.add}>
        <input 
          type='text' 
          className={styles.input}
          onChange={onChangeInput}
          value={text}
        ></input>
        <button
          type='submit'
          className={styles.btnAdd}
        >
          <FiPlus></FiPlus>
        </button>
      </div>
    </form>
  )
}
