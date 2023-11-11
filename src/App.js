import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import LandingPage from './Components/Landing_Page/LandingPage.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/Sign_Up/Sign_Up.js';
import Notification from './Components/Notification/Notification.js';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch.js';
import DoctorCard from './Components/DoctorCard/DoctorCard.js';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm.js';
import BookingConsultation from './Components/BookingConsultation.js';
import ReviewForm from './Components/ReviewForm/ReviewForm.js';
import Profile from './Components/Profile/Profile.js'
import Reports from './Components/Reports/Reports.js'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Notification>
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/SignUp" element={<SignUp />}/>
                    <Route path="/FindDoctor" element={<FindDoctorSearch />}/>
                    <Route path="/DoctorCard" element={<DoctorCard />}/>
                    <Route path="/AppointmentForm" element={<AppointmentForm />}/>
                    <Route path="/search/doctors" element={<BookingConsultation />}/>   
                    <Route path="/reviews" element={<ReviewForm />}/>
                    <Route path="/profile" element={<Profile />}/> 
                    <Route path="/reports" element={<Reports />}/>                 
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                </Routes>
            </Notification>
        </BrowserRouter>
       
    </div>
  );
}

export default App;