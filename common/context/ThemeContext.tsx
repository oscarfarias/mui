import React, { useState, useContext, createContext } from 'react'
import type { ReactChild } from 'react'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import getTheme, { Theme } from '../config/theme'

type ContextProps = {
  theme: Theme
  mergeTheme: (theme: Theme) => void
}
const ThemeContext = createContext({} as ContextProps)

function ThemeProvider({ children }: { children: ReactChild }): JSX.Element {
  const [theme, setTheme] = useState(getTheme())
  function mergeTheme(theme: Theme): void {
    setTheme(getTheme(theme))
  }
  return (
    <ThemeContext.Provider value={{ theme, mergeTheme }}>
      <ThemeStyled theme={theme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  )
}
function useTheme(): ContextProps {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { ThemeProvider, useTheme }
