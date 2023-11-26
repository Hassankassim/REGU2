import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import CardUser from './Carduser'
import Count from '../counts/count'
function Dashboard() {
  return (
    <>
   <Navbaruser  />
    <div>
      <Count />
        
      <div className='center margint'>
        <h4>Updates and allerts</h4>
      </div>
    </div>
    <footer />
    </>
  )
}

export default Dashboard
