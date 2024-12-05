import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import './styles/App.css';

import AuthProvider from './features/AuthProvider';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AuthProvider>
        <ScrollRestoration />

        <div className="h-24"></div>

        <Navbar />

        <Outlet />

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
