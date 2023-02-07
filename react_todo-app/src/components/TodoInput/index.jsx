import React from 'react'
import styles from './styles.module.css'
import { FiPlus } from 'react-icons/fi'

export const TodoInput = () => {
  return (
    <form className={styles.container}>
      <div className={styles.add}>
        <input type='text' className={styles.input}></input>
        <button className={styles.btnAdd}>
          <FiPlus></FiPlus>
        </button>
      </div>
    </form>
  )
}
