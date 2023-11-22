import { Grid, Paper, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import { SUNNY } from 'common/assets'
const Wheather = (): JSX.Element => {
  const theme = useTheme()
  const { darkSnow, lightWhite } = theme.palette.custom
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
        <Grid
          container
          sx={{
            display: `flex`,
            position: `absolute`,
            height: `107px`,
            background: theme.gradients[0],
            top: `-4%`,
            borderRadius: `8px`,
            width: `94%`,
            alignSelf: `center`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ width: `90%` }}
          >
            <Grid
              item
              sx={{
                flexDirection: `column`,
                width: `auto`,
                display: `flex`,
                marginTop: `15px`,
              }}
            >
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: `14px !important`,
                }}
                color={darkSnow}
              >
                Wheather Today
              </Typography>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: `20px !important`,
                }}
                color={lightWhite}
              >
                San Francisco - 29°C
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                flexDirection: `column`,
                alignItems: `center`,
                display: `flex`,
              }}
            >
              <Image src={SUNNY} alt="sunny" width={69} height={51} />
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: `20px !important`,
                }}
                color={lightWhite}
              >
                Sunny
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Wheather
