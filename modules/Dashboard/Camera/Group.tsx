import { Grid, Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useCamera } from '../hooks'

const Group = (): JSX.Element => {
  const {
    palette: {
      custom: { linearCloud, primaryDark },
    },
  } = useTheme()
  const { getSXByCameraState, setCameraState, cameras } = useCamera()

  return (
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
        {cameras.map((camera) => (
          <Button
            key={camera.type}
            variant="flat"
            onClick={() => setCameraState(camera.type)}
            sx={getSXByCameraState(camera.type)}
          >
            {camera.title}
          </Button>
        ))}
      </Grid>
    </Grid>
  )
}

export default Group
