import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Stethoscope } from 'lucide-react';
import { api } from '../../api';

const SpecializationForm = () => {
  const [formData, setFormData] = useState({
    specialization_id: '',
    specialization_name: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.addSpecialization(formData);
      toast.success('Specialization added successfully!');
      setFormData({ specialization_id: '', specialization_name: '', description: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to add specialization');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in delay-100">
      <div className="page-header">
        <h1 className="page-title">Add Specialization</h1>
        <p className="page-description">Define a new medical specialization domain.</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--secondary-color)' }}>
            <Stethoscope size={24} />
          </div>
          <h2 className="card-title" style={{ margin: 0 }}>Specialization Details</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Specialization ID</label>
              <input type="number" name="specialization_id" value={formData.specialization_id} onChange={handleChange} className="form-input" required placeholder="Ex: 501" />
            </div>
            <div className="form-group">
              <label className="form-label">Specialization Name</label>
              <input type="text" name="specialization_name" value={formData.specialization_name} onChange={handleChange} className="form-input" required placeholder="Ex: Cardiology" />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Description</label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-input" required placeholder="Brief description of the specialization" />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Processing...' : 'Save Specialization'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecializationForm;
