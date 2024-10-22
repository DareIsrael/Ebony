import React from 'react';
import Services from './Services';


const AdvertPage = () => {
  return (
    <>
    <div className="advert-container">
      <h1 className="advert-title">Your Trusted Provider for TV Subscriptions & POS Solutions</h1>
      <p className="advert-description">Your one-stop service for DSTV, GOTV, and Startimes subscriptions.</p>
      <p className="advert-description">We also offer POS services for seamless payment transactions.</p>
    
      <div className="call-to-action">
        <h2 className="cta-title">Subscribe Now!</h2>
        <p className="cta-text">Experience the best entertainment with our unbeatable packages.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>

    <Services />
    </>
  );
};

export default AdvertPage;
