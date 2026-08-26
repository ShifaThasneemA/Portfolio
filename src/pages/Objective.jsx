import "./Objective.css";

function Objective() {
  return (
    <>
      {/* OBJECTIVE SECTION */}
      <section id="objective" className="objective-hero">

        <div className="objective-card">
          <span className="objective-tag">OBJECTIVE</span>

          <h2>Career Objective</h2>

          <p>
            I am a passionate Computer Science Engineering student with a
            strong interest in Cyber Security. I aim to build secure, reliable
            and scalable digital solutions while continuously improving my
            technical skills.
          </p>

          <p className="muted">
            I am looking for opportunities where I can learn from real-world
            challenges and contribute meaningfully to organizational growth.
          </p>
        </div>

        <div className="objective-image">
          <img src="/profile.jpg" alt="Shifa Thasneem" />
        </div>

      </section>


      {/* ACADEMIC PERFORMANCE */}
      <section className="academic-performance">

        <div className="academic-heading">
          <span>ACADEMIC PERFORMANCE</span>

          <h2>Education Highlights</h2>
        </div>

        <div className="academic-stats">

          {/* CGPA */}
          <div className="academic-stat-card">
            <h3>CGPA</h3>

            <strong>8.23</strong>

            <p>B.E CSE – Cyber Security</p>
          </div>


          {/* 12TH */}
          <div className="academic-stat-card">
            <h3>12th Standard</h3>

            <strong>86.83%</strong>

            <p>Higher Secondary</p>
          </div>


          {/* 10TH */}
          <div className="academic-stat-card">
            <h3>10th Standard</h3>

            <strong>99.6%</strong>

            <p>SSLC</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Objective;