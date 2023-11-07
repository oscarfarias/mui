import Toolbar from '@mui/material/Toolbar'
import Header from './Header'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Grid container p={1} sx={{ backgroundColor: `#F0F2F5` }}>
      <Header />
      <Sidebar />
      <Grid
        container
        sm
        height={{ xs: `calc(100vh - 56px)`, sm: `97vh` }}
        sx={{
          overflowY: `auto`,
        }}
      >
        <Grid
          mx={{ sm: 3, xs: 1 }}
          mt={{ sm: 3, xs: 1 }}
          mb={{ sm: 2 }}
          xs={12}
          sm={12}
        >
          <Toolbar />
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
