import { AppBar, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Icon } from 'common/components'
import { drawerWidth } from 'common/config/constants'
const Header = (): JSX.Element => {
  const {
    palette: {
      custom: { lightDark, lightWhite, primaryDark },
    },
  } = useTheme()

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth + 8}px)`,
        backgroundColor: lightWhite,
        mt: `8px`,
      }}
      elevation={0}
    >
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item direction="column" md={5}>
            <Grid item direction="row" sx={{ display: `flex` }}>
              <Icon icon="home" sx={{ color: lightDark }} />
              <Typography
                fontSize="14px"
                sx={{
                  color: lightDark,
                }}
              >
                / Pages /
              </Typography>
              <Typography
                fontSize="14px"
                sx={{
                  color: primaryDark,
                  marginLeft: `3px`,
                }}
              >
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontWeight="500"
                fontSize="16px"
                sx={{
                  color: primaryDark,
                }}
              >
                Dashboard
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              sx={{
                width: `173px`,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: lightWhite,
                },
              }}
              placeholder="Search here"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default Header
