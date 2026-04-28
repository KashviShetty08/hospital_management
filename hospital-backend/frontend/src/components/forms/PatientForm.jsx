import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Users } from 'lucide-react';
import { api } from '../../api';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    patient_name: '',
    age: '',
    gender: 'Male',
    address: '',
    contact_number: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.addPatient(formData);
      toast.success('Patient added successfully!');
      setFormData({ patient_id: '', patient_name: '', age: '', gender: 'Male', address: '', contact_number: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to add patient');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Add Patient</h1>
        <p className="page-description">Register a new patient into the hospital system.</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary-color)' }}>
            <Users size={24} />
          </div>
          <h2 className="card-title" style={{ margin: 0 }}>Patient Details</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Patient ID</label>
              <input type="number" name="patient_id" value={formData.patient_id} onChange={handleChange} className="form-input" required placeholder="Ex: 101" />
            </div>
            <div className="form-group">
              <label className="form-label">Patient Name</label>
              <input type="text" name="patient_name" value={formData.patient_name} onChange={handleChange} className="form-input" required placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} className="form-input" required placeholder="Age" />
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-input" required placeholder="Phone Number" />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input" required placeholder="Full Residential Address" />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Processing...' : 'Save Patient'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
