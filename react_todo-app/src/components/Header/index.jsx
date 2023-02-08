import React, { useCallback, useContext } from 'react'
import styles from './styles.module.css'
import { RiMoonClearFill } from 'react-icons/ri'
import { DarkmodeContext } from '../../context/DarkmodeContext'

export const Header = ({ filters, handleFilter }) => {
  const { toggleDarkmode } = useContext(DarkmodeContext)

  const handleDarkmode = useCallback(() => {
    toggleDarkmode()
  }, [toggleDarkmode])

  return (
    <header className={styles.container}>
      <button 
        className={styles.darkmode}
        onClick={handleDarkmode}
      >
        <RiMoonClearFill></RiMoonClearFill>
      </button>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <button 
            className={styles.filter} key={index}
            onClick={() => handleFilter(filter)}
          >{filter}</button>
        ))}
      </div>
    </header>
  )
}
