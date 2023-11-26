import React from "react";
import Navbaruser from "../components/navbar/Navbaruser";
import Footer from "../components/footer/footer";
import SarufiChatbox from "react-sarufi-chatbox";
import chat from "../assets/img/icons8-chat-bot-96.png";
// usage

function Sarufi() {
  return (
    <>
      <Navbaruser />
      <SarufiChatbox botId={2517} />
      <div className="center margint">Sarufi</div>
      <h4 className="margintt">Welcome to our Economybot</h4>
      <div className="center">
        {" "}
        <img src={chat} />
      </div>
      <p className="text red">
        "Welcome to our innovative Economy Bot! 🤖 We're thrilled to introduce
        you to your personal guide for real-time economic insights. This
        friendly bot is designed to provide you with valuable market
        information, assist in navigating economic trends, and support your
        decision-making process. Ask any economic-related question, and our
        Economy Bot is here to help you stay informed and empowered in your
        business endeavors. Let's explore the world of economic insights
        together!
      </p>
      <Footer />
    </>
  );
}

export default Sarufi;
