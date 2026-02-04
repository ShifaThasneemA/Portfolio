import "./Navbar.css";

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* LEFT: Profile + Name */}
      <div className="nav-left">
        <img src="/profile.jpg" alt="" className="nav-profile" />
        <div className="nav-text">
          <h3>SHIFA THASNEEM AMEER</h3>
          <p>B.E CSE · Cyber Security</p>
        </div>
      </div>

      {/* CENTER: Menu */}
      <ul className="nav-center">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("objective")}>Objective</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>
        <li onClick={() => scrollTo("certifications")}>Certifications</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>


        {/* later add */}
        {/* <li onClick={() => scrollTo("projects")}>Projects</li> */}
        {/* <li onClick={() => scrollTo("contact")}>Contact</li> */}
      </ul>

      {/* RIGHT: Admin (future) */}
      <button className="admin-btn">Admin Login</button>
    </nav>
  );
}

export default Navbar;
