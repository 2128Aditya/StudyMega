import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "../pages/Home/Home";

import Notes from "../pages/Notes/Notes";
import Pyq from "../pages/Pyq/Pyq";
import SamplePapers from "../pages/SamplePapers/SamplePapers";
import Important from "../pages/Important/Important";
import Syllabus from "../pages/Syllabus/Syllabus";
import College from "../pages/College/College";

import PdfView from "../pages/Pdf/PdfView";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import AiPlanner from "../pages/AiPlanner/AiPlanner";
import Roadmaps from "../pages/AiPlanner/Roadmaps";
import RoadmapDetail from "../pages/AiPlanner/RoadmapDetail";

import NotFound from "../pages/NotFound";

/* Admin Pages */
import AdminDashboard from "../admin/pages/AdminDashboard";
import UploadPdf from "../admin/pages/UploadPdf";
import ManagePdfs from "../admin/pages/ManagePdfs";

/* Protected */
import AdminProtected from "./AdminProtected";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />

      <Route path="/notes" element={<Notes />} />
      <Route path="/pyq" element={<Pyq />} />
      <Route path="/sample-papers" element={<SamplePapers />} />
      <Route path="/important" element={<Important />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/college" element={<College />} />

      <Route path="/pdf/:id" element={<PdfView />} />

      {/* AI */}
      <Route path="/ai-planner" element={<AiPlanner />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/roadmaps/:id" element={<RoadmapDetail />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin (Protected) */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminProtected>
            <AdminDashboard />
          </AdminProtected>
        }
      />

      <Route
        path="/admin/upload"
        element={
          <AdminProtected>
            <UploadPdf />
          </AdminProtected>
        }
      />

      <Route
        path="/admin/manage-pdfs"
        element={
          <AdminProtected>
            <ManagePdfs />
          </AdminProtected>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}