/* eslint-disable quotes */
import { Roboto } from '@next/font/google'
import { PaletteMode, Theme } from '@mui/material'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
  interface Theme {
    gradients: string[]
  }
}

const primary = {
  main: `#E93B77`,
  dark: `#115293`,
  light: `#42A5F5`,
}

const secondary = {
  main: `#00D8BB`,
  contrastText: `#000`,
}
const common = {
  black: `#000219`,
  white: `#ffffff`,
}

const COMMON = {
  common,
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
  text: {
    primary: common.white,
  },
}

const palette = {
  light: {
    ...COMMON,
    mode: 'light' as PaletteMode,
  },
}

export default palette
