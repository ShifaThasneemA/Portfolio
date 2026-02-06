import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src="/profile.jpg" alt="" className="nav-profile" />
        <div>
          <h3>SHIFA THASNEEM AMEER</h3>
          <p>B.E CSE Cyber Security</p>
        </div>
      </div>

      {/* CENTER */}
      <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/objective">Objective</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT */}
      <button className="admin-btn" onClick={() => navigate("/admin")}>
        Admin Login
      </button>
    </nav>
  );
}

export default Navbar;
;

