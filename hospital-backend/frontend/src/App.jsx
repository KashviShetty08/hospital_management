import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import PatientForm from './components/forms/PatientForm';
import SpecializationForm from './components/forms/SpecializationForm';
import DepartmentForm from './components/forms/DepartmentForm';
import DoctorForm from './components/forms/DoctorForm';
import StaffForm from './components/forms/StaffForm';
import AppointmentForm from './components/forms/AppointmentForm';

function App() {
  return (
    <div className="app-container">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'var(--bg-surface)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)'
          }
        }} 
      />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PatientForm />} />
          <Route path="/specialization" element={<SpecializationForm />} />
          <Route path="/department" element={<DepartmentForm />} />
          <Route path="/doctor" element={<DoctorForm />} />
          <Route path="/staff" element={<StaffForm />} />
          <Route path="/appointment" element={<AppointmentForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
