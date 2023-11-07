import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { drawerWidth } from 'common/config/constants'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Icon } from 'common/components'
import { icons } from 'common/components/Icon'
import { LOGO } from 'common/assets'
import Image from 'next/image'

interface MenuProps {
  name: string
  icon: keyof typeof icons
  selected?: boolean
}

const menu: MenuProps[] = [
  {
    name: `Dashboard`,
    icon: `home`,
    selected: true,
  },
  {
    name: `Analytics`,
    icon: `apartment`,
  },
  {
    name: `Billing`,
    icon: `apartment`,
  },
  {
    name: `Profile`,
    icon: `apartment`,
  },
  {
    name: `Notifications`,
    icon: `noteAlt`,
  },
]

const Sidebar = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Grid
      sx={{
        width: drawerWidth,
        background: theme.gradients[1],
        borderRadius: `12px`,
      }}
      p={1}
    >
      <Grid item direction="row" p={1} mt={1} sx={{ display: `flex` }}>
        <Image src={LOGO} alt="logo" />
      </Grid>
      <Divider sx={{ backgroundColor: `white`, marginTop: 1 }} />

      <List sx={{ width: `100%` }}>
        {menu.map(({ name, icon, selected }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ marginBottom: `4px` }} selected={selected}>
              <ListItemIcon>
                <Icon icon={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: `white` }} />
    </Grid>
  )
}
export default Sidebar
