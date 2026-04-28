import pyodbc
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ---------------- DATABASE CONNECTION ----------------
try:
    conn = pyodbc.connect(
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost;"
        "DATABASE=hospitalsystem;"
        "Trusted_Connection=yes;"
    )
    cursor = conn.cursor()
    print("✅ Connected to SQL Server")

except Exception as e:
    print("❌ Connection Error:", e)

# ---------------- HOME ----------------
@app.route('/')
def home():
    return "✅ Backend Running"

# ---------------- CREATE TABLES ----------------
@app.route('/create_tables')
def create_tables():
    try:
        # Patient
        cursor.execute("""
        IF OBJECT_ID('Patient', 'U') IS NULL
        CREATE TABLE Patient(
            patient_id INT PRIMARY KEY,
            patient_name VARCHAR(100),
            age INT,
            gender VARCHAR(10),
            address VARCHAR(200),
            contact_number VARCHAR(15)
        )
        """)

        # Specialization
        cursor.execute("""
        IF OBJECT_ID('Specialization', 'U') IS NULL
        CREATE TABLE Specialization(
            specialization_id INT PRIMARY KEY,
            specialization_name VARCHAR(100),
            description VARCHAR(200)
        )
        """)

        # Department
        cursor.execute("""
        IF OBJECT_ID('Department', 'U') IS NULL
        CREATE TABLE Department(
            department_id INT PRIMARY KEY,
            department_name VARCHAR(100),
            number_of_employee INT
        )
        """)

        # Doctor
        cursor.execute("""
        IF OBJECT_ID('Doctor', 'U') IS NULL
        CREATE TABLE Doctor(
            doctor_id INT PRIMARY KEY,
            doctor_name VARCHAR(100),
            contact_number VARCHAR(15),
            working_hours VARCHAR(50),
            specialization_id INT,
            FOREIGN KEY (specialization_id) REFERENCES Specialization(specialization_id)
        )
        """)

        # Staff
        cursor.execute("""
        IF OBJECT_ID('Staff', 'U') IS NULL
        CREATE TABLE Staff(
            staff_id INT PRIMARY KEY,
            staff_name VARCHAR(100),
            contact_number VARCHAR(15),
            role VARCHAR(50),
            department_id INT,
            FOREIGN KEY (department_id) REFERENCES Department(department_id)
        )
        """)

        # Appointment
        cursor.execute("""
        IF OBJECT_ID('Appointment', 'U') IS NULL
        CREATE TABLE Appointment(
            appointment_id INT PRIMARY KEY,
            appointment_date DATE,
            appointment_time TIME,
            status VARCHAR(50),
            patient_id INT,
            doctor_id INT,
            staff_id INT,
            FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
            FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id),
            FOREIGN KEY (staff_id) REFERENCES Staff(staff_id)
        )
        """)

        conn.commit()
        return "✅ All Tables Created Successfully"

    except Exception as e:
        print("❌ ERROR:", e)
        return str(e)

# ---------------- ADD PATIENT ----------------
@app.route('/add_patient', methods=['POST'])
def add_patient():
    try:
        data = request.json

        cursor.execute("""
        INSERT INTO Patient VALUES (?, ?, ?, ?, ?, ?)
        """,
        int(data['patient_id']),
        data['patient_name'],
        int(data['age']),
        data['gender'],
        data['address'],
        data['contact_number']
        )

        conn.commit()
        return jsonify({"message": "Patient Added"})

    except Exception as e:
        print("❌ ERROR:", e)
        return jsonify({"error": str(e)}), 500


# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)