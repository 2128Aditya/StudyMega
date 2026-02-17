import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

// Main Pages
import Notes from "../pages/Notes/Notes";
import Pyq from "../pages/Pyq/Pyq";
import SamplePapers from "../pages/SamplePapers/SamplePapers";
import College from "../pages/College/College";
import Important from "../pages/Important/Important";
import Syllabus from "../pages/Syllabus/Syllabus";
import AiPlanner from "../pages/AiPlanner/AiPlanner";
import PdfView from "../pages/Pdf/PdfView";
import Profile from "../pages/User/Profile";
import Saved from "../pages/User/Saved";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import UploadPdf from "../admin/pages/UploadPdf";
import ManagePdfs from "../admin/pages/ManagePdfs";
import ManageUsers from "../admin/pages/ManageUsers";
import Analytics from "../admin/pages/Analytics";



// Auth
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Static
import About from "../pages/Static/About";
import Contact from "../pages/Static/Contact";
import PrivacyPolicy from "../pages/Static/PrivacyPolicy";
import Terms from "../pages/Static/Terms";

// NotFound
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Public Pages */}
      <Route path="/notes" element={<Notes />} />
      <Route path="/pyq" element={<Pyq />} />
      <Route path="/sample-papers" element={<SamplePapers />} />
      <Route path="/college" element={<College />} />
      <Route path="/important" element={<Important />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/ai-planner" element={<AiPlanner />} />
      <Route path="/pdf/:id" element={<PdfView />} />+
      <Route path="/profile" element={<Profile />} />
<Route path="/saved" element={<Saved />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/upload" element={<UploadPdf />} />
<Route path="/admin/manage-pdfs" element={<ManagePdfs />} />
    <Route path="/admin/manage-users" element={<ManageUsers />} />
<Route path="/admin/analytics" element={<Analytics />} />


      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Static */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
