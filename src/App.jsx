import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Speakers from './components/Speakers';
import MeetOurTeam from './components/MeetOurTeam';
import LastPage from './components/LastPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import Event from './components/Event';
import About from './components/About';
import SponsorForm from './components/SponsorForm';
import { Toaster } from "sonner"
import EventDetails from './components/EventDetails';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateEvent from './components/admin/CreateEvent';
import EditEvent from './components/admin/EditEvent';
import AdminLogin from './components/admin/AdminLogin';
import SubscribeForm from './components/SubscribeForm';

// Admin route wrapper component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

function App() {
  const location = useLocation();

  return (
    <>
      <SubscribeForm />
      {/* Only show Navbar if not on /APIconf2025 */}
      {location.pathname !== "/APIconf2025" && <Navbar />}
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/APIconf2025" element={<LastPage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/sponsor" element={<SponsorForm />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/events/create"
            element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/events/edit/:eventId"
            element={
              <ProtectedRoute>
                <EditEvent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <Toaster 
        position="top-right"
        expand={true}
        richColors
        closeButton
      />
    </>
  );
}

export default App;
