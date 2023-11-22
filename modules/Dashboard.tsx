import { ReactElement } from 'react'
import Layout from './Layout'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { RECORDING, RECORDING_ICON } from 'common/assets'
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
            sx={{
              display: `flex`,
              top: `-5%`,
              position: `absolute`,
            }}
            md={12}
            ml={1}
            mr={1}
          >
            <Image src={RECORDING} alt="recording" style={{ width: `100%` }} />
          </Grid>
          <Paper
            sx={{
              zIndex: 1,
              width: `130px`,
              backgroundColor: snow,
              padding: `4px`,
              justifyContent: `center`,

              display: `flex`,
              position: `absolute`,
              right: `25px`,
              borderRadius: `12px`,
            }}
          >
            <Box
              sx={{ marginTop: `2px`, flexDirection: `row`, display: `flex` }}
            >
              <Box sx={{ marginTop: `2px` }}>
                <Image
                  src={RECORDING_ICON}
                  alt="recording_icon"
                  width={16}
                  height={16}
                />
              </Box>
              <Typography
                fontWeight="500"
                sx={{ color: `black`, marginLeft: `4px` }}
              >
                RECORDING
              </Typography>
            </Box>
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
