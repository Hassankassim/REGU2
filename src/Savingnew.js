import React from 'react';
import './style.css'; // Import your CSS file
import Navbar from './components/navbar/navbar';
import backendAPI from './api/backendAPI'
function SavingNew() {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const postDetails = async () => {
        try {
          setLoading(true);
          const { data } = await backendAPI.post("", { name, phone });
          if (data.success) {
            console.log(`${data.name} is Saved. Done!`);
            setData(<span className="blue-text">{`${data.name} is Saved. Done!`}</span>);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      postDetails();
    };
    const handleDownloadVcard = () => {
      window.location.href = "https://bucket-egxu.onrender.com/api/v1/download";
    };
  
  return (
    <>
    <Navbar />
    <h1 className='center margint' >Login</h1>
    <div className="feedback1">
          <div className="m-3 text-success">{data && <h5>{data}</h5>}</div>
          <div className="m-3 text-warning">
            {loading && (
              <div id="page">
                <div id="container">
                  <div id="ring"></div>
                  <div id="ring"></div>

                  <div id="ring"></div>
                  <div id="ring"></div>
                  <div id="h3">Saving..!</div>
                </div>
              </div>
            )}
          </div>
          </div>
    <div className='center margint'>
        
    <div className="savingnew-container">
      <div className="savingnew-heading">login</div>
      <form onSubmit={handleSubmit} className="savingnew-form">
        <input required className="savingnew-input" type="text" name="name" id="text" placeholder="Your Name" />
        <input required className="savingnew-input" type="text" name="phone" id="password" placeholder="Password" />
        <span className="savingnew-forgot-password"><a href="#">Call the Admin?</a></span>
        <input onSubmit={handleSubmit} className="savingnew-login-button" type="submit" value="Login" />
      </form>
      <div className="savingnew-social-account-container">
        <span className="savingnew-title">Call the Admin</span>
        <div className="savingnew-social-accounts">
          <button className="savingnew-social-button savingnew-google">
            <svg className="savingnew-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              {/* Google SVG Path */}
            </svg>
          </button>
          <button className="savingnew-social-button savingnew-apple">
            <svg className="savingnew-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              {/* Apple SVG Path */}
            </svg>
          </button>
          <button className="savingnew-social-button savingnew-twitter">
            <svg className="savingnew-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              {/* Twitter SVG Path */}
            </svg>
          </button>
        </div>
      </div>
      <span className="savingnew-agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
    </div>
    </>
  );
}

export default SavingNew;
