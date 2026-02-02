import profileImg from "../assets/profile.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
  src={profileImg}
  alt=""
  className="profile-img"
/>


      <div className="welcome-card">
        <span className="tag">WELCOME</span>
        <h1>WELCOME TO VIEW MY PROFESSIONAL PORTFOLIO.</h1>

        <p>
          Hello, I'm <b>Shifa Thasneem Ameer</b>. I have created this space to
          present my journey in <b>Cyber Security and Technology</b> in a clean
          and professional way.
        </p>

        <p className="muted">
          This portfolio is an invitation to walk through my learning journey,
          understand my strengths and see how I am growing step by step in this
          field.
        </p>

        <div className="btn-group">
          <button>Objective</button>
          <button>Skills</button>
          <button>Certifications</button>
          <button>Projects</button>
          <button>Achievements</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
{/* Objective Section */}
<section id="objective" style={{ marginTop: "100px" }}>
  <h2>Objective</h2>
  <p>
    To build a strong career in Cyber Security by continuously learning and
    applying technical skills to solve real-world problems.
  </p>
</section>

{/* Skills Section */}
<section id="skills" style={{ marginTop: "100px" }}>
  <h2>Skills</h2>
  <p>Cyber Security, Networking, Java, Python, Web Development</p>
</section>

{/* Certifications Section */}
<section id="certifications" style={{ marginTop: "100px" }}>
  <h2>Certifications</h2>
  <p>List of certifications will be displayed here.</p>
</section>

{/* Projects Section */}
<section id="projects" style={{ marginTop: "100px" }}>
  <h2>Projects</h2>
  <p>Details about academic and personal projects.</p>
</section>

{/* Achievements Section */}
<section id="achievements" style={{ marginTop: "100px" }}>
  <h2>Achievements</h2>
  <p>Academic and technical achievements.</p>
</section>

{/* Contact Section */}
<section id="contact" style={{ marginTop: "100px" }}>
  <h2>Contact</h2>
  <p>Email: shifa@example.com</p>
</section>

