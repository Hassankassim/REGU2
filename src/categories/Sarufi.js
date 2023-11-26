import React from 'react'
import Navbaruser from '../components/navbar/navbar'
import SarufiChatbox from "react-sarufi-chatbox"
  
// usage


function Sarufi() {
  return (
    <>
    <Navbaruser />
    <div>Sarufi
    <SarufiChatbox botId={2517} />
    </div>
    </>
  )
}

export default Sarufi