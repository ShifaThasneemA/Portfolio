import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Objective from "./pages/Objective";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCertificates from "./pages/AdminCertificates";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/certificates" element={<AdminCertificates />} />

      </Routes>
    </Router>
  );
}

export default App;
;
