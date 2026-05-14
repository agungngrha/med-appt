import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist', 'General Physician', 'Dermatologist', 'Ear-Nose-Throat', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [doctorName, setDoctorName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Navigasi ke rute pencarian berdasarkan spesialisasi (Sesuai kriteria Task 8)
        navigate(`/search/doctors?speciality=${speciality}`);
    };

    return (
        <div className="finddoctor">
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search doctors by name..." 
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                    <select 
                        value={speciality} 
                        onChange={(e) => setSpeciality(e.target.value)}
                    >
                        <option value="">Select Speciality</option>
                        {initSpeciality.map(spec => (
                            <option key={spec} value={spec}>{spec}</option>
                        ))}
                    </select>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;