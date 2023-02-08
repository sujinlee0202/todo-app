import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiEdit, FiPlus } from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './styles.module.css'

export const Todo = ({ todo, todos, deleteTodo, updateTodo, editTodo }) => {
  const { completed } = todo;
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(todo.text) // 초기값으로 원래 todo text 가져오기
  const editInputRef = useRef(null)

  useEffect(() => {
    if(edit) {
      editInputRef.current.focus()
    }
  }, [edit])

  const handleDeleteTodo = useCallback(() => {
    deleteTodo(todo)
  }, [todo, deleteTodo])

  const handleCheckbox = useCallback((e) => {
    const completed = e.target.checked ? true : false
    updateTodo({...todo, completed: completed})
  }, [todo, updateTodo])

  const handleChangeEditButton = useCallback((e) => {
    setEdit(true)
  }, [])

  const handleChangeEditText = useCallback((e) => {
    setEditText(e.target.value)
  }, [])

  const handleSubmitEdit = useCallback(() => {
    const newTodos = todos.map((item) => ({
      ...item,
      text: item.id === todo.id ? editText : item.text,
    }))
    editTodo(newTodos)
    setEdit(false)
  }, [editText, editTodo, todo, todos])

  return (
    <li className={styles.todo} key={todo.id}>
      <input 
        type='checkbox' 
        className={styles.checkbox}
        onChange={handleCheckbox}
        checked={completed}
        id={todo.id}
      ></input>
      {
        edit
        ? (<input 
          type='text' 
          className={styles.editText}
          onChange={handleChangeEditText}
          ref={editInputRef}
          value={editText}
          ></input>)
        : (<label 
          className={`${styles.text}`} htmlFor={todo.id}
          value={todo.text}
          >{todo.text}</label>)
      }
      <div className={styles.buttons}>
        {
          edit 
          ? (<button 
            className={`${styles.btnEdit}`}
            onClick={handleSubmitEdit}
            >
          <FiPlus></FiPlus>
          </button>
          ) : (<button 
            className={`${styles.btnEdit}`}
            onClick={handleChangeEditButton}
            >
            <FiEdit></FiEdit>
          </button>)
        }
        <button 
          className={styles.btnDelete}
          onClick={handleDeleteTodo}
        >
          <BsFillTrashFill></BsFillTrashFill>
        </button>
      </div>
    </li>
  )
}
