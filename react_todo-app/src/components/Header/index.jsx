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
        {filters.map((filter) => (
          <button className={styles.filter}>{filter}</button>
        ))}
      </div>
    </header>
  )
}
