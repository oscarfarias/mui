import { ReactElement } from 'react'
import Layout from '../Layout'
import { Grid } from '@mui/material'
import Camera from './Camera'
import Wheather from './Wheather'

const Dashboard = (): JSX.Element => {
  return (
    <Grid container direction="column">
      <Grid container direction="row" justifyContent="space-between">
        <Grid item sx={{ width: `60%` }}>
          <Camera />
        </Grid>
        <Grid item sx={{ width: `39%` }}>
          <Wheather />
        </Grid>
      </Grid>
    </Grid>
  )
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
