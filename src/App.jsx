import './App.css'
import Login from './Login.jsx'
import SignupStudent from './SignupStudent.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignupStudent" element={<SignupStudent />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </Router>
  )
}

export default App
