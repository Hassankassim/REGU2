import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import SarufiChatbox from "react-sarufi-chatbox"
import map from '../assets/img/ROADMAP2.png'
// usage

function Roadmap() {
  return (
    <>
    <Navbaruser />
    <SarufiChatbox botId={2517} />
    <div className='center margint'>Roadmap</div>
    <h4 className='margintt'>Roadmap</h4>
   <div className='center'  > <img src={map} /></div>
    <p className="text red">Click Below to Economy Chatbot</p>
    <Footer />
    </>
  )
}

export default Roadmap