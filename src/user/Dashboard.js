import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import CardUser from './Carduser'
import Count from '../counts/count'
import Button from '../components/button/Button'
import Option from '../categories/Option'
function Dashboard() {
  return (
    <>
   <Navbaruser  />
    <div>
      <Count />
        
      <div className='center margint'>
        <h4>Key Regulatory Areas Impacting Startups in Tanzania</h4>
      </div>
      <div className='center'> <Option /></div>
<p className='center margint'><Button name ="Apply Embeju" /></p>
    </div>
    <footer />
    </>
  )
}

export default Dashboard
