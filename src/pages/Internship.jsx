import "./Internship.css";

function Internship() {
  return (
    <section className="internship-section">

      <h2>Internship</h2>

      {/* ELYSIUM INTERNSHIP */}
      <div className="internship-item">

        <img
          src="/internship/internship1.png"
          alt="Elysium Technologies Internship Certificate"
          className="internship-image"
        />

        <div className="internship-content">
          <h3>Core & Advanced Python Internship</h3>

          <h4>Elysium Technologies Private Limited</h4>

          <p>
            I successfully completed an internship in Core & Advanced
            Python at Elysium Technologies Private Limited.
          </p>

          <p>
            During the internship, I gained practical experience in
            Python programming, problem solving and application
            development.
          </p>

          <p className="duration">
            Duration: 17.06.2025 – 16.07.2025
          </p>
        </div>

      </div>


      {/* HACKUP INTERNSHIP */}
      <div className="internship-item">

        <img
          src="/internship/internship2.png"
          alt="Hackup Technology Internship Certificate"
          className="internship-image"
        />

        <div className="internship-content">
          <h3>Ethical Hacking & Cyber Security Internship</h3>

          <h4>Hackup Technology Pvt Ltd</h4>

          <p>
            I attended an internship program in Ethical Hacking and
            Cyber Security conducted by Hackup Technology.
          </p>

          <p>
            The internship provided practical exposure to ethical
            hacking concepts, cybersecurity practices and security
            awareness.
          </p>

          <p className="duration">
            Duration: 02.07.2026 – 15.07.2026
          </p>
        </div>

      </div>

    </section>
  );
}

export default Internship;