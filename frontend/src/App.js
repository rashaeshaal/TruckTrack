import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import CompanyLogin from './components/CompanyLogin';
import DriverLogin from './components/DriverLogin';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company-login" element={<CompanyLogin />} />
      <Route path="/driver-login" element={<DriverLogin />} />
      </Routes>
      </Router>
      );
    }


export default App;
