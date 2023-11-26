import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

function Generate() {
  return (
    <>
     <Navbar />
     <h1 className='hw'>Welcome to Regu</h1>
     <p className='center'>Get Registerd</p>
    <div className='center'>
     
     
      <div className="form-container">
      <div className="form">
        <span className="heading">Get registerd</span>
        <lebel>Name of startUp</lebel><input placeholder="eg.Judith " type="text" className="input" />
        <lebel>Name of Owner</lebel><input placeholder="eg.Hassan" id="text" type="text" className="input" />
        <lebel>Phone Number</lebel><input placeholder="eg.+255" id="mail" type="phone" className="input" />
        <lebel>Password</lebel><input placeholder="........" id="mail" type="password" className="input" />
        <lebel >Description of your StartUp</lebel>
        <textarea
          placeholder="..........."
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
        ></textarea>
        <div className="button-container">
          <div className="send-button">Register</div>
          <div className="reset-button-container">
            <a href='/Savingnew'><div id="" className="reset-button">
              Login
            </div></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Generate
