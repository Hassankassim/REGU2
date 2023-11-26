import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import CardUser from './Carduser'
import Count from '../counts/count'
import Option from '../categories/Option'
function Dashboard() {
  return (
    <>
   <Navbaruser  />
    <div>
      <Count />
        
      <div className='center margint'>
        <h4>Updates and allerts</h4>
      </div>
      <div className='center'> <Option /></div>
    </div>
    <footer />
    </>
  )
}

export default Dashboard
