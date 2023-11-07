import { ReactElement } from 'react'
import Layout from './Layout'

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
