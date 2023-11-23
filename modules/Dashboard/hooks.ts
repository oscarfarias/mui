import { useState } from 'react'
import { CAMERAS, Camera } from './types'
import { SxProps, Theme, useTheme } from '@mui/material/styles'

const cameras: Camera[] = [
  {
    title: `Living`,
    type: CAMERAS.LIVING,
  },
  {
    title: `Kitchen`,
    type: CAMERAS.KITCHEN,
  },
  {
    title: `Attic`,
    type: CAMERAS.ATTIC,
  },
]

const useCamera = () => {
  const {
    palette: {
      custom: { primaryDark },
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
  return {
    getSXByCameraState,
    setCameraState,
    cameras,
  }
}

export { useCamera }
