# 🏥 Hospital Outpatient & Appointment Management System

## 📌 Overview

The **Hospital Outpatient & Appointment Management System** is a database-driven web application designed to efficiently manage hospital operations such as patient records, doctor details, and appointment scheduling.

Traditional hospital systems often rely on manual processes, leading to data redundancy, errors, and inefficiencies. This system provides a **centralized, structured, and automated solution** to improve workflow and data management.

---

## 🚀 Key Features

* 🧑‍⚕️ Patient Registration & Management
* 👨‍⚕️ Doctor Profile & Specialization Management
* 📅 Appointment Scheduling & Tracking
* 🏥 Department & Staff Management
* 📊 SQL Queries for Data Analysis
* 🔄 Views for simplified data access
* ⚡ Triggers for enforcing business rules

---

## 🛠️ Tech Stack

**Frontend:**

* React
* HTML, CSS, JavaScript

**Backend:**

* Flask (Python)
* RESTful APIs

**Database:**

* SQL Server

**Other Tools:**

* Axios (API communication)

---

## 📁 Project Structure

```
hospital_management/
│
├── frontend/        # React frontend
├── backend/         # Flask backend
├── database/        # SQL scripts (DDL, DML, Queries)
└── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone Repository

```
git clone https://github.com/KashviShetty08/hospital_management.git
cd hospital_management
```

---

### 2️⃣ Setup Backend (Flask)

```
cd backend
pip install -r requirements.txt
python app.py
```

---

### 3️⃣ Setup Frontend (React)

```
cd frontend
npm install
npm start
```

---

## 🧠 Database Design

### 📌 Entities

* Patient
* Doctor
* Specialization
* Department
* Staff
* Appointment

### 🔗 Relationships

* Patient → Appointment (1:N)
* Doctor → Appointment (1:N)
* Staff → Appointment (1:N)
* Doctor → Specialization (N:1)
* Department → Staff (1:N)

---

## 📊 Sample Queries

* Doctors with their specialization
* Number of appointments per doctor
* Completed appointments
* Total patient count
* Staff with department details

---

## 🎯 Advantages

* Centralized data management
* Reduced redundancy
* Improved efficiency
* Accurate appointment handling
* Strong data integrity

---

## 🔮 Future Enhancements

* User authentication (Admin/Doctor/Staff roles)
* Real-time notifications (Email/SMS)
* Advanced search & filtering
* Mobile app integration
* Analytics dashboard
* Online appointment booking
* Cloud deployment


## ⭐ Final Note
This project demonstrates the practical implementation of Database Management System concepts in a real-world healthcare scenario, integrating frontend, backend, and database technologies into a unified system.

This project demonstrates the practical implementation of **Database Management System concepts** in a real-world healthcare scenario, integrating frontend, backend, and database technologies into a unified system.
