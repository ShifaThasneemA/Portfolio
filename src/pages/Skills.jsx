import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-tag">EXPERTISE</span>
        <h2>Skills & Competencies</h2>
        <p>
          A balanced combination of technical knowledge, communication abilities
          and problem-solving skills developed through academics and hands-on learning.
        </p>
      </div>

      <div className="skills-cards">
        {/* Technical */}
        <div className="skills-card">
          <h3>Technical Skills</h3>
          <ul>
            <li>Python Programming</li>
            <li>Java Programming</li>
            <li>Computer Networking</li>
            <li>Data Structures</li>
            <li>Cyber Security Fundamentals</li>
          </ul>
        </div>

        {/* Languages */}
        <div className="skills-card">
          <h3>Languages</h3>
          <ul>
            <li>Urdu – Mother Tongue</li>
            <li>English – Fluent</li>
            <li>Hindi – Proficient</li>
            <li>Tamil – Fluent (Native)</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skills-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
            <li>Confident Public Speaker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

