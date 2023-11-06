/* eslint-disable quotes */
import { Roboto } from '@next/font/google'
import { blue, orange, green, red, grey } from '@mui/material/colors'
import { PaletteMode } from '@mui/material'
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

declare module '@mui/material/styles' {
  type AugmentedPaletteProps = Omit<Palette['primary'], 'contrastText'>
  interface StatusPalette extends AugmentedPaletteProps {
    background?: string
  }
  interface Status {
    blue: StatusPalette
    orange: StatusPalette
    gray: StatusPalette
    green: StatusPalette
    red: StatusPalette
  }

  interface ScrollBar {
    track: string
    thumb: string
  }

  interface EditorToolbar {
    iconColor: string
    iconBackgroundHover: string
    iconBackgroundActive: string
  }
  interface Dashboard {
    grayColor: string
    background: string
  }

  interface Deal {
    textBlue: string
    backgroundBlue: string
    scrollBlue: string
    backgroundScroll: string
    subtitleGray: string
    typeBlue: string
    dealStatus: {
      text: string
      background: string
    }
    dealHistory: {
      blueIcon: string
      greenIcon: string
      orangeIcon: string
      grayIcon: string
      blueIconBackground: string
      greenIconBackground: string
      orangeIconBackground: string
      grayIconBackground: string
    }
    dealWhatsapp: {
      headerFooterBackground: string
      textGray: string
      textTitle: string
      text: string
      dateBackground: string
      dateText: string
      bubbleBackground: string
      timeText: string
      iconColor: string
      doubleCheckColor: string
      buttonBackground: string
      pendingColor: string
      errorColor: string
    }
    dealPhonecall: {
      subtitle: string
      selectItem: string
      selectIcon: string
      typeCallBackground: string
      grayIconColor: string
      inCallBackground: string
      darkIconColor: string
      grayColor: string
      greenColor: string
      headerBackground: string
      modalTitle: string
      cancelButton: string
      noteTitle: string
      redIconColor: string
    }
    dealNote: {
      headerBackground: string
      footerBackground: string
      iconColor: string
      titleColor: string
      bodyColor: string
      borderColor: string
    }
    dealTask: {
      labelColor: string
      inputColor: string
      footerBackground: string
      error: string
    }
    dealDocument: {
      textIconColor: string
      fileNameColor: string
      fileSizeColor: string
      borderColor: string
      borderDraggingColor: string
      backgroundDraggingColor: string
      textColor: string
      backgroundFileColor: string
    }
    dealEmail: {
      modalBackgroundColor: string
      headerBackgroundColor: string
      textIconColor: string
      textInputColor: string
      textChipColor: string
      iconChipColor: string
      iconChipHoverColor: string
      sendButtonHoverColor: string
      deleteIconColor: string
    }
  }

  interface Automation {
    causeColor: string
    conditionColor: string
  }

  export interface TemplatePalette {
    npsTag: {
      text: string
      background: string
    }
    pdfTag: {
      text: string
      background: string
    }
  }

  interface Palette {
    status: Status
    deal: Deal
    scrollBar: ScrollBar
    editorToolbar: EditorToolbar
    dashboard: Dashboard
    automation: Automation
    template: TemplatePalette
  }

  interface PaletteOptions {
    status: Status
    deal: Deal
    scrollBar: ScrollBar
    editorToolbar: EditorToolbar
    dashboard: Dashboard
    automation: Automation
    template: TemplatePalette
  }
}
const primary = {
  main: `#1976d2`,
  dark: `#115293`,
  light: `#42A5F5`,
}

const secondary = {
  main: `#00D8BB`,
  contrastText: `#000`,
}

const status = {
  blue: {
    main: blue[700],
    light: blue[100],
    dark: blue[800],
    background: blue[50],
  },
  orange: {
    main: orange[700],
    light: orange[100],
    dark: orange[800],
    background: orange[50],
  },
  gray: {
    light: '#ECEFF1',
    dark: '#00000099',
    main: '#d7d7d7c7',
    background: `#f7f9f9`,
  },
  green: {
    main: green[700],
    light: green[100],
    dark: green[800],
    background: green[50],
  },
  red: {
    main: red[700],
    light: red[100],
    dark: red[800],
    background: red[50],
  },
}

const scrollBar = {
  track: `#FAFAFA`,
  thumb: `#BDBDBD`,
}

const editorToolbar = {
  iconColor: '#777777',
  iconBackgroundHover: '#eeeeee',
  iconBackgroundActive: '#cccccc',
}
const dashboard = {
  grayColor: `#3F3F3FCC`,
  background: `#F5F5F5`,
}

const deal = {
  textBlue: blue[400],
  backgroundBlue: `#0288D1`,
  scrollBlue: `#2F88CD`,
  backgroundScroll: `#F0F0F0`,
  subtitleGray: `#5C5C5C`,
  typeBlue: `#1890FF`,
  dealStatus: {
    text: blue[800],
    background: blue[100],
  },
  dealHistory: {
    blueIcon: blue[400],
    greenIcon: green[500],
    orangeIcon: orange[300],
    redIcon: red[500],
    grayIcon: '#00000080',
    blueIconBackground: blue[50],
    greenIconBackground: `#52C41A33`,
    orangeIconBackground: `#FFF3E0`,
    grayIconBackground: grey[300],
    redIconBackground: red[50],
  },
  dealWhatsapp: {
    headerFooterBackground: '#F3F6FB',
    textGray: `#00000036`,
    textTitle: `#4A4A4A`,
    text: `#4D4D4D`,
    dateBackground: `#F1F1F1`,
    dateText: `#616161E5`,
    bubbleBackground: `#E9F7D6`,
    timeText: `#818181`,
    iconColor: `#0000008A`,
    doubleCheckColor: `#1890FF`,
    buttonBackground: `#65D072`,
    pendingColor: `#00000036`,
    errorColor: `rgba(211, 47, 47, 1)`,
  },
  dealPhonecall: {
    subtitle: `#4A4A4A`,
    selectItem: `#212121`,
    selectIcon: `#0000008A`,
    typeCallBackground: `#DDEFFD`,
    grayIconColor: `#D9D9D9`,
    darkIconColor: `#00000075`,
    inCallBackground: `#F3F6FB`,
    grayColor: `#979797`,
    greenColor: `#66BB6A`,
    headerBackground: `#E8E8E8`,
    modalTitle: `#626161`,
    cancelButton: `#1976D2`,
    noteTitle: `#4240408A`,
    redIconColor: `#F7442F`,
  },
  dealNote: {
    headerBackground: '#F9F9F9',
    footerBackground: `#F3F6FB`,
    iconColor: `#00000061`,
    titleColor: `#4A4A4A`,
    bodyColor: `#00000099`,
    borderColor: '#D9D9D9',
  },
  dealTask: {
    labelColor: `#000000CC`,
    inputColor: `#00000099`,
    footerBackground: `#F3F6FB`,
    error: `rgba(211, 47, 47, 1)`,
  },
  dealDocument: {
    textIconColor: `#1890FF`,
    fileNameColor: `#1976D2`,
    fileSizeColor: `#979797`,
    borderColor: `#D9D9D9`,
    borderDraggingColor: `rgba(0,0,0,.5)`,
    backgroundDraggingColor: `rgba(0,0,0,.025)`,
    textColor: `#5E5E5E`,
    backgroundFileColor: '#EEEEEE',
  },
  dealEmail: {
    modalBackgroundColor: `rgba(0,0,0,.45)`,
    headerBackgroundColor: `#F3F6FB`,
    textIconColor: `#4A4A4A`,
    textInputColor: `#979797`,
    textChipColor: `#00000099`,
    iconChipColor: '#00000042',
    iconChipHoverColor: '#00000052',
    sendButtonHoverColor: `#1976D2`,
    deleteIconColor: `#F7442F`,
  },
}

const automation = {
  causeColor: '#9C27B0',
  conditionColor: `#ED6C02`,
}

const template = {
  npsTag: {
    text: `#E65100`,
    background: `#FFE0B2`,
  },
  pdfTag: {
    text: `#4A148C`,
    background: `#E1BEE7`,
  },
}

const COMMON = {
  template,
  automation,
  dashboard,
  deal,
  editorToolbar,
  status,
  scrollBar,
  common: {
    black: `#000219`,
    white: `#ffffff`,
  },
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
  text: {
    primary: `#000219`,
  },
  border: {
    primary: primary.main,
  },
  background: {
    default: `#ffffff`,
  },
  yellow: {
    main: `#FFB400`,
  },
}

const palette = {
  light: {
    ...COMMON,
    mode: 'light' as PaletteMode,
  },
  dark: {
    ...COMMON,
    mode: 'dark' as PaletteMode,
    text: {
      primary: COMMON.common.white,
    },
    border: {
      primary: COMMON.common.white,
    },
    background: {
      default: COMMON.common.black,
    },
    dashboard: {
      ...COMMON.dashboard,
      background: COMMON.common.black,
    },
    deal: {
      ...COMMON.deal,
      subtitleGray: COMMON.common.white,
      dealTask: {
        ...COMMON.deal.dealTask,
        labelColor: COMMON.common.white,
      },
      dealPhonecall: {
        ...COMMON.deal.dealPhonecall,
        headerBackground: COMMON.common.black,
        grayIconColor: COMMON.common.white,
        noteTitle: COMMON.common.white,
        inCallBackground: COMMON.common.black,
        subtitle: COMMON.common.white,
      },
    },
  },
}

export default palette
