import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CheckoutPage from './pages/CheckoutPage';
import SplashPage from './pages/SplashPage';
import logoImage from './assets/logo-test.png'

function App() {
  return (
    <Router>
      <Navbar logoImage={logoImage} companyName="Demo" />
      <div className="App">
        <Routes>
          <Route path="/splash" element={<SplashPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<SplashPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;