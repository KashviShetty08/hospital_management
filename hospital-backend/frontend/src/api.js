const API_URL = 'http://localhost:5000';

const request = async (endpoint, method = 'POST', data = null) => {
  try {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (data) {
      config.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Something went wrong');
    }
    
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const api = {
  addPatient: (data) => request('/add_patient', 'POST', data),
  addSpecialization: (data) => request('/add_specialization', 'POST', data),
  addDepartment: (data) => request('/add_department', 'POST', data),
  addDoctor: (data) => request('/add_doctor', 'POST', data),
  addStaff: (data) => request('/add_staff', 'POST', data),
  addAppointment: (data) => request('/add_appointment', 'POST', data),
};
