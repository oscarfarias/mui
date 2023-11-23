import { Switch, TextField, Typography, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import { FACEBOOK_ICON, GITHUB_ICON, GOOGLE_ICON } from 'common/assets'
import { useRouter } from 'next/router'
const Login = (): JSX.Element => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(/assets/images/background-login.png)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: `100vh`,
        alignItems: `center`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <Grid
        item
        sx={{
          display: `flex`,
          justifyContent: `center`,
          position: `relative`,
        }}
      >
        <Grid
          item
          flexDirection="column"
          sx={{
            background: theme.gradients[0],
            width: `377px`,
            height: `147px`,
            borderRadius: `8px`,
            display: `flex`,
            top: `-8%`,
            position: `absolute`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Typography fontSize="22px" fontWeight="bold">
            Sign In
          </Typography>

          <Grid
            item
            width="50%"
            flexDirection="row"
            display="flex"
            justifyContent="space-between"
            mt="20px"
          >
            <Image src={FACEBOOK_ICON} alt="facebook" width={18} height={18} />
            <Image src={GITHUB_ICON} alt="github" width={18} height={18} />
            <Image src={GOOGLE_ICON} alt="google" width={18} height={18} />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: `white`,
            width: `408px`,
            height: `471px`,
            borderRadius: `12px`,
          }}
        >
          <Grid item mt={18} p={3} flexDirection="column">
            <TextField placeholder="Email" />
            <TextField
              sx={{ marginTop: `12px` }}
              placeholder="Current password"
            />
            <Grid
              item
              sx={{
                width: `100%`,
                flexDirection: `row`,
                display: `flex`,
              }}
            >
              <Switch sx={{ marginLeft: `-10px` }} />
              <Typography
                fontSize="14px"
                sx={{
                  marginLeft: `4px`,
                  color: `grey`,
                  marginTop: `8px`,
                }}
              >
                Remember me
              </Typography>
            </Grid>

            <Button
              onClick={() => router.push(`/dashboard`)}
              sx={{ marginTop: `30px` }}
            >
              SIGN IN
            </Button>
            <Grid
              item
              sx={{
                marginTop: `8px`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,

                height: `80px`,
              }}
            >
              <Typography
                fontSize="14px"
                sx={{
                  color: `grey`,
                }}
              >
                Don’t have an account?
              </Typography>
              <Typography
                fontSize="14px"
                fontWeight="bold"
                sx={{
                  color: theme.palette.primary.main,
                  marginLeft: `4px`,
                }}
              >
                Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
