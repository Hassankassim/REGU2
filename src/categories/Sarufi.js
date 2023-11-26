import React from 'react'
import Navbaruser from '../components/navbar/Navbaruser'
import Footer from '../components/footer/footer'
import SarufiChatbox from "react-sarufi-chatbox"
import chat from '../assets/img/icons8-chat-bot-96.png'
// usage

function Sarufi() {
  return (
    <>
    <Navbaruser />
    <SarufiChatbox botId={2517} />
    <div className='center margint'>Sarufi</div>
    <h4 className='margintt'>Welcome to our chatbot</h4>
   <div className='center'> <img  src={chat}/></div>
    <p className="text red">Click Below to Economy Chatbot</p>
    <Footer />
   </>
  )
}

export default Sarufi