import { Typography, Paper, Grid } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { CardProps } from '../types'
const Card = ({ title, measure, type, value }: CardProps): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark, lightDark },
      primary,
    },
  } = useTheme()
  return (
    <Paper
      elevation={3}
      sx={{
        width: `24%`,
        height: `163px`,
        display: `flex`,
        borderRadius: `12px`,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `column`,
      }}
    >
      <Grid container sx={{ width: `auto` }} direction="row">
        <Typography
          fontWeight="bold"
          sx={{ fontSize: `48px !important`, color: primary.main }}
        >
          {value}
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: `18px !important`,
            color: primary.main,
            width: `auto`,
            marginTop: `30px`,
          }}
        >
          {measure}
        </Typography>
      </Grid>
      <Typography
        fontWeight="bold"
        sx={{ color: primaryDark, fontSize: `16px !important` }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: lightDark, fontSize: `14px !important` }}>
        {type}
      </Typography>
    </Paper>
  )
}
export default Card
