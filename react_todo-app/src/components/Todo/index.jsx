import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './styles.module.css'

export const Todo = ({ todo }) => {
  return (
    <li className={styles.todo} key={todo.id}>
      <input type='checkbox' className={styles.checkbox}></input>
      <label className={styles.text}>{todo.text}</label>
      <div className={styles.buttons}>
        <button className={styles.btnEdit}>
          <FiEdit></FiEdit>
        </button>
        <button className={styles.btnDelete}>
          <BsFillTrashFill></BsFillTrashFill>
        </button>
      </div>
    </li>
  )
}
