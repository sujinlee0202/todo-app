import React, { createContext, useEffect, useState } from 'react'

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false)

  const updateDarkmode = (darkmode) => {
    if(darkmode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    updateDarkmode(!darkmode);
  }

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' ||
    (!('theme in localStorage') && window.matchMedia('(prefers-color-scheme: dark').matches)
    
    setDarkmode(isDark)
    updateDarkmode(isDark)
  }, [])
  
  return (
    <DarkmodeContext.Provider
      value={{darkmode: darkmode, toggleDarkmode}}
    >
      {children}
    </DarkmodeContext.Provider>
  )
}
