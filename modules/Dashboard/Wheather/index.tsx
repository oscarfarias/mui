import { Grid, Paper } from '@mui/material'

import Image from 'next/image'

import Header from './Header'
import { CHART } from 'common/assets'
const Wheather = (): JSX.Element => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: `100%`,
        height: `458px`,
        display: `flex`,
        borderRadius: `12px`,
      }}
    >
      <Grid
        container
        sx={{
          position: `relative`,
          flexDirection: `column`,
        }}
      >
        <Header />
        <Grid
          container
          sx={{
            position: `absolute`,
            display: `flex`,
            bottom: `20px`,
            width: `100%`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Image src={CHART} alt="chart" style={{ width: `90%` }} />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Wheather
