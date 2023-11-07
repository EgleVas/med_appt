import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date });
      setName('');
      setPhoneNumber('');
      setDate('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Select date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="timeSlot">Select time:</label>
            <select name ="timeSlot"> 
                <option value ="0"> Please select </option>
                <option value = "09:00" > 09:00 </option>                
                <option value = "10:00" > 10:00 </option>                
                <option value = "11:00" > 11:00 </option>
                <option value = "12:00" > 12:00 </option>
                <option value = "13:00" > 13:00 </option>
                <option value = "14:00" > 14:00 </option>
                <option value = "15:00" > 15:00 </option>
                <option value = "16:00" > 16:00 </option>
                <option value = "17:00" > 17:00 </option>
            </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
