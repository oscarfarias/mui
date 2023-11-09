import { ReactElement } from 'react'
import Layout from './Layout'
import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { RECORDING } from 'common/assets'
import { useTheme } from '@mui/material/styles'

const Dashboard = (): JSX.Element => {
  const {
    palette: {
      custom: { snow },
    },
  } = useTheme()
  return (
    <Grid container sx={{ display: `flex` }}>
      <Paper
        elevation={3}
        sx={{
          width: `60%`,
          height: `458px`,
          display: `flex`,
          borderRadius: `12px`,
        }}
      >
        <Grid
          container
          sx={{
            display: `flex`,
            position: `relative`,
            flexDirection: `column`,
          }}
        >
          <Grid
            item
            sx={{ display: `flex`, top: `-5%`, position: `absolute` }}
            md={12}
            ml={1}
            mr={1}
          >
            <Image src={RECORDING} alt="recording" style={{ width: `100%` }} />
          </Grid>
          <Paper
            sx={{
              zIndex: 1,
              width: `150px`,
              backgroundColor: snow,
              padding: 1,
            }}
          >
            <Typography
              fontWeight="500"
              sx={{ color: `black`, borderRadius: `8px` }}
            >
              RECORDING
            </Typography>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  )
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
