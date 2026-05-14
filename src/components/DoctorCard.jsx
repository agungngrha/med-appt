import React from 'react';

const DoctorCard = () => {
  const handleCancel = () => {
    localStorage.removeItem("bookedData");
    alert("Appointment Cancelled");
  };

  return (
    <div className="doctor-card">
      <button onClick={handleCancel}>Cancel Appointment</button>
    </div>
  );
};

export default DoctorCard;