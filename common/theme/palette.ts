/* eslint-disable quotes */
import { Roboto } from '@next/font/google'
import { PaletteMode } from '@mui/material'
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

declare module '@mui/material/styles' {
  //interface Palette {}
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
