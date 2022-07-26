import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EmployeesPage from './pages/EmployeesPage';
import EmployeePage from './pages/EmployeePage';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/employee" element={<EmployeesPage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
