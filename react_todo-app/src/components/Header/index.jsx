import React from 'react'
import styles from './styles.module.css'
import { RiMoonClearFill } from 'react-icons/ri'

export const Header = () => {
  const filters = ['all', 'active', 'completed']

  return (
    <header className={styles.container}>
      <div className={styles.darkmode}>
        <RiMoonClearFill></RiMoonClearFill>
      </div>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <button className={styles.filter} key={index}>{filter}</button>
        ))}
      </div>
    </header>
  )
}
