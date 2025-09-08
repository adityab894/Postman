import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Speakers from './components/Speakers';
import MeetOurTeam from './components/MeetOurTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import Event from './components/Event';
import About from './components/About';
import SponsorForm from './components/APIConf2025/SponsorForm';
import { Toaster } from "sonner";
import EventDetails from './components/EventDetails';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateEvent from './components/admin/CreateEvent';
import EditEvent from './components/admin/EditEvent';
import AdminLogin from './components/admin/AdminLogin';
import SubscribeForm from './components/SubscribeForm';
import APIConfHome from './components/APIConf2025/APIConfHome';
import APIConfSpeakers from './components/APIConf2025/APIConfSpeakers';
import APIConfSponsors from './components/APIConf2025/APIConfSponsors';
import APIConfTeam from './components/APIConf2025/APIConfTeam';
import APIConfFAQ from './components/APIConf2025/APIConfFAQ';
import APIConfAgenda from './components/APIConf2025/APIConfAgenda';

// Admin route wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

function App() {
  const location = useLocation();

  // Routes where navbar should be hidden
  const noNavbarRoutes = [
    "/APIconf2025",
    "/admin",
    "/admin/login"
  ];

  // Check if current path starts with any of the noNavbarRoutes
  const hideNavbar = noNavbarRoutes.some(route =>
    location.pathname === route || location.pathname.startsWith(route + "/")
  );

  return (
    <>
      <SubscribeForm />
      {!hideNavbar && <Navbar />}
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/sponsor" element={<SponsorForm />} />

          {/* APIConf 2025 Pages */}
          {/* <Route path="/APIconf2025" element={<APIConfHome />} /> */}
          {/* <Route path="/APIconf2025/speakers" element={<APIConfSpeakers />} />
          <Route path="/APIconf2025/sponsors" element={<APIConfSponsors />} />
          <Route path="/APIconf2025/faq" element={<APIConfFAQ />} />
          <Route path="/APIconf2025/team" element={<APIConfTeam />} />
          <Route path="/APIconf2025/agenda" element={<APIConfAgenda />} /> */}

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
