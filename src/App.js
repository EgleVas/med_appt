import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import LandingPage from './Components/Landing_Page/LandingPage.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/Sign_Up/Sign_Up.js';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/SignUp" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;