import React from 'react'
import './Dashboard.css'
import Info from '../../Info/Info'
import User from '../../User/User'
import Search from '../../Search/Search'

const Dashboard = () => {



  return (
    <div>
      <Search/>
      <Info/>
      <User/>
    </div>
  )
}

export default Dashboard