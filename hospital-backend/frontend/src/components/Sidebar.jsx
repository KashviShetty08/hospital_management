import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Users, Stethoscope, Building2, UserCircle, CalendarPlus } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', name: 'Add Patient', icon: Users },
    { path: '/specialization', name: 'Add Specialization', icon: Stethoscope },
    { path: '/department', name: 'Add Department', icon: Building2 },
    { path: '/doctor', name: 'Add Doctor', icon: Activity },
    { path: '/staff', name: 'Add Staff', icon: UserCircle },
    { path: '/appointment', name: 'Add Appointment', icon: CalendarPlus },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Activity className="sidebar-brand" size={28} />
        <span className="sidebar-brand">MedCare Pro</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
