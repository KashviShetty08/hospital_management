import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Building2 } from 'lucide-react';
import { api } from '../../api';

const DepartmentForm = () => {
  const [formData, setFormData] = useState({
    department_id: '',
    department_name: '',
    number_of_employee: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.addDepartment(formData);
      toast.success('Department added successfully!');
      setFormData({ department_id: '', department_name: '', number_of_employee: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to add department');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in delay-200">
      <div className="page-header">
        <h1 className="page-title">Add Department</h1>
        <p className="page-description">Create a new department within the hospital.</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.1)', color: 'var(--accent-color)' }}>
            <Building2 size={24} />
          </div>
          <h2 className="card-title" style={{ margin: 0 }}>Department Overview</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Department ID</label>
              <input type="number" name="department_id" value={formData.department_id} onChange={handleChange} className="form-input" required placeholder="Ex: 301" />
            </div>
            <div className="form-group">
              <label className="form-label">Department Name</label>
              <input type="text" name="department_name" value={formData.department_name} onChange={handleChange} className="form-input" required placeholder="Ex: Intensive Care Unit" />
            </div>
            <div className="form-group">
              <label className="form-label">Number of Employees</label>
              <input type="number" name="number_of_employee" value={formData.number_of_employee} onChange={handleChange} className="form-input" required placeholder="Ex: 50" />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Processing...' : 'Save Department'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
