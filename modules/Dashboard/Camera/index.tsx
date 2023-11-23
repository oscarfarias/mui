import { Grid, Paper } from '@mui/material'
import Recording from './Recording'
import Group from './Group'

const Camera = (): JSX.Element => {
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
          display: `flex`,
          position: `relative`,
          flexDirection: `column`,
        }}
      >
        <Recording />
        <Group />
      </Grid>
    </Paper>
  )
}
export default Camera
