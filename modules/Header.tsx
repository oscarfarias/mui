import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { Icon } from 'common/components'
import { drawerWidth } from 'common/config/constants'
const Header = (): JSX.Element => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth + 8}px)`,
        backgroundColor: `#F0F2F5`,
        mt: `8px`,
      }}
      elevation={0}
    >
      <Toolbar>
        <Grid container>
          <Grid item direction="column" md={5}>
            <Grid item direction="row" sx={{ display: `flex` }}>
              <Icon icon="home" sx={{ color: `#7B809A` }} />
              <Typography
                fontSize="14px"
                sx={{
                  color: `#7B809A`,
                }}
              >
                / Pages /
              </Typography>
              <Typography
                fontSize="14px"
                sx={{
                  color: `#344767`,
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
                  color: `#344767`,
                }}
              >
                Dashboard
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default Header
