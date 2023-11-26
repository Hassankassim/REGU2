import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import SarufiChatbox from "react-sarufi-chatbox"
  
// usage

function Roadmap() {
  return (
    <>
    <Navbaruser />
    <SarufiChatbox botId={2517} />
    <div className='center margint'>Roadmap</div>
    <h4 className='margintt'>Roadmap</h4>
    <p className="text red">Click Below to Economy Chatbot</p>
    <Footer />
    </>
  )
}

export default Roadmap