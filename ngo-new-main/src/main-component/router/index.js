import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import OurPartners from '../AboutPage/OurPartners';
import BecomeVolunteer from '../BecomeVolunteer/BecomeVolunteer';
import EventPage from '../EventPage/EventPage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import CausesPage from '../CausesPage/CausesPage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import DonatePage from '../DonatePage/DonatePage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import GalleryPage from '../GalleryPage';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import UserDashboard from '../../pages/UserDashboard';
import AdminDashboard from '../../pages/AdminDashboard';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage3 />} />
          <Route path="home" element={<HomePage3 />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="our-team/:slug" element={<TeamSinglePage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="get-involved" element={<BecomeVolunteer />} />
          <Route path="get-involved/become-volunteer" element={<BecomeVolunteer />} />
          <Route path="get-involved/fundraising-compaigns" element={<ServiceSinglePage />} />
          <Route path="get-involved/:slug" element={<ServiceSinglePage />} />
          <Route path="get-involved/corporate-partnerships" element={<OurPartners />} />
          <Route path="get-involved/events" element={<EventPage />} />
          <Route path="get-involved/:slug" element={<EventSinglePage />} />
          <Route path="impact" element={<CausesPage />} />
          <Route path="impact/success-stories" element={<CausesPage />} />
          <Route path="impact/gallery" element={<GalleryPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="404" element={<ErrorPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
