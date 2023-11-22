import { ReactElement, useState } from 'react'
import Layout from './Layout'
import { Box, Grid, Paper, Typography, Button } from '@mui/material'
import Image from 'next/image'
import { RECORDING, RECORDING_ICON } from 'common/assets'
import { SxProps, Theme, useTheme } from '@mui/material/styles'

enum CAMERAS {
  KITCHEN = `KITCHEN`,
  LIVING = `LIVING`,
  ATTIC = `ATTIC`,
}
const Dashboard = (): JSX.Element => {
  const {
    palette: {
      custom: { snow, linearCloud, primaryDark },
    },
  } = useTheme()

  const [cameraState, setCameraState] = useState<CAMERAS>(CAMERAS.LIVING)
  const getSXByCameraState = (camera: CAMERAS): SxProps<Theme> => {
    const defaultButton = {
      color: primaryDark,
      '&:hover': {
        boxShadow: 3,
        color: primaryDark,
      },
    }
    const selected = {
      color: primaryDark,
      boxShadow: 3,
    }
    return cameraState === camera ? selected : defaultButton
  }

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

          <Grid
            container
            sx={{
              display: `flex`,
              position: `absolute`,
              bottom: `10px`,
              left: `10px`,
              width: `97%`,
              justifyContent: `space-between`,
              flexDirection: `row`,
            }}
          >
            <Typography
              fontWeight="500"
              fontSize="16px"
              sx={{ color: primaryDark, marginLeft: `4px`, marginTop: `4px` }}
            >
              Cameras
            </Typography>

            <Grid
              item
              sx={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `space-between`,
                backgroundColor: linearCloud,
                borderRadius: `8px`,
              }}
              md={5}
            >
              <Button
                variant="flat"
                onClick={() => setCameraState(CAMERAS.KITCHEN)}
                sx={getSXByCameraState(CAMERAS.KITCHEN)}
              >
                Kitchen
              </Button>
              <Button
                variant="flat"
                onClick={() => setCameraState(CAMERAS.LIVING)}
                sx={getSXByCameraState(CAMERAS.LIVING)}
              >
                Living
              </Button>
              <Button
                variant="flat"
                onClick={() => setCameraState(CAMERAS.ATTIC)}
                sx={getSXByCameraState(CAMERAS.ATTIC)}
              >
                Attic
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
