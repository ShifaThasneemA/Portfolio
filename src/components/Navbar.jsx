import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/profile.jpg" className="nav-profile" />

        <div>
          <h3>SHIFA THASNEEM AMEER</h3>
          <p>B.E Computer Science Engineering · Cyber Security</p>
        </div>
      </div>

      <ul className="nav-center">
        <li>Objective</li>
        <li>Skills</li>
        <li>Certifications</li>
        <li>Projects</li>
        <li>Achievements</li>
        <li>Contact</li>
      </ul>

      <button className="admin-btn">Admin Login</button>
    </nav>
  );
}

export default Navbar;
