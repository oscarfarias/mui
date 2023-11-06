const input = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `none`,
        },
        border: `0.5px solid #909090`,
      },
      formControl: {
        width: `100%`,
      },
      input: {
        '&:disabled': {
          opacity: `initial`,
          cursor: `not-allowed`,
        },
        fontSize: `14px`,
        color: `black`,
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        fontSize: `0.9em`,
        width: `100%`,
        color: `black`,
      },
      underline: {
        '&:before': {
          // eslint-disable-next-line quotes
          content: '""',
        },
        '&:after': {
          // eslint-disable-next-line quotes
          content: '""',
        },
      },
      error: {
        border: `1.2px solid red`,
      },
    },
  },
}
export default input
