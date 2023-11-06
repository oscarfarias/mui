const button = {
  MuiButton: {
    defaultProps: {
      variant: `contained`,
    },
    styleOverrides: {
      root: {
        padding: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 4,
        '&:hover': {
          borderRadius: 4,
        },
        '&:disabled': {
          cursor: `not-allowed`,
          pointerEvents: `auto`,
        },
      },
      error: {
        padding: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 4,
      },
    },
  },
}

export default button
