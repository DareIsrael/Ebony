import React from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import AdvertPage from './components/AdvertPage';
import SubscriptionForm from './components/SubscriptionForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoSlider from './components/LogoSlider';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
    
     <Routes>
        <Route exact path="/" element={<AdvertPage />} />
        <Route path="/subscribe" element={<SubscriptionForm />} />
       
     </Routes>
     <LogoSlider />
    <Footer />
   </div>
    
     
  );
};

export default App;
