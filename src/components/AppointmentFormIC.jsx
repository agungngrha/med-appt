import React, { useState } from 'react';

const AppointmentFormIC = () => {
  return (
    <form>
      <input type="text" placeholder="Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentFormIC;