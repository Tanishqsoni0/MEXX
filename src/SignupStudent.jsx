import React from "react";
import Food from "./assets/Food.png";
import "./SignupStudent.css";
import { Link } from 'react-router-dom';

export const SignupStudent = () => {
  const handlestudent = () =>{
    document.getElementById("student").style.backgroundColor="#e6423f"
    document.getElementById("student").style.color="#ffece8"
    document.getElementById("staff").style.backgroundColor="#ffece8"
    document.getElementById("staff").style.color="#e6423f"
    const input = document.createElement("input");
    input.id = "rollno";
    input.type = "text";
    input.placeholder = "Roll No";
    
    document.getElementById("form1").appendChild(input);
  }
  const handlestaff = () =>{
    document.getElementById("staff").style.backgroundColor="#e6423f"
    document.getElementById("staff").style.color="#ffece8"
    document.getElementById("student").style.backgroundColor="#ffece8"
    document.getElementById("student").style.color="#e6423f"
    document.getElementById("rollno").remove()
  }
  return (
    <div className="container">
      <div className="image-section">
        <img className="IMG" alt="Img" src={Food} />
      </div>
      <div className="form-section">
        <h1>WELCOME TO MEXX</h1>
        <p className="subtitle">Create Your Account</p>

        <div className="toggle-buttons">
          <button onClick={handlestudent} id="student" className="Student">Student</button>
          <div className="separator-line"></div>
          <button onClick={handlestaff} id="staff" className="Staff">Staff</button>
        </div>

        <form>
          <div id="form1" className="form-row">
            <input type="text" placeholder="Name" required />
            <input id="rollno" type="text" placeholder="Roll No." required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Contact No." required />
            <input type="text" placeholder="Hostel" required />
          </div>
          <input className="email" type="email" placeholder="Email" required />
          <input className="password" type="password" placeholder="Password" required />

          <button type="submit" className="submit-btn">
            Create Account
          </button>
          <p className="login-link">
            Already have an Account? <Link className="Signup-link" to="/Login">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignupStudent;
