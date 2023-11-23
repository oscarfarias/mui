import { Grid } from '@mui/material'
import Card from './Card'
import { CardProps } from '../types'

const cards: CardProps[] = [
  {
    title: `Living Room`,
    value: 21,
    measure: `°C`,
    type: `Temperature`,
  },
  {
    title: `Outside`,
    value: 44,
    measure: `%`,
    type: `Humidity`,
  },
  {
    title: `Water`,
    value: 87,
    measure: `m³`,
    type: `Comsumption`,
  },
  {
    title: `Internet`,
    value: 417,
    measure: `°C`,
    type: `All devices`,
  },
]

const Temperature = (): JSX.Element => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      {cards.map((card) => (
        <Card key={card.type} {...card} />
      ))}
    </Grid>
  )
}

export default Temperature
