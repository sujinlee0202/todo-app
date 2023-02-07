import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './styles.module.css'

export const Todo = () => {
  return (
    <li className={styles.todo}>
      <input type='checkbox' className={styles.checkbox}></input>
      <label className={styles.text}>투두리스트</label>
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
