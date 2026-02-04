import "./Projects.css";

const projects = [
  {
    title: "ELT Pipeline for Retail Sales Analytics",
    desc: "Developed an ELT pipeline to extract data from multiple sources, load it into a cloud data warehouse, and transform it for real-time analytics and dashboard reporting.",
    tech: "Python · Data Analytics · Cloud · ETL",
  },
  {
    title: "Blockchain-Based Farmer Transparency Application",
    desc: "Designed a blockchain application to ensure transparent supply chains using smart contracts and verifiable farm-to-consumer traceability.",
    tech: "Blockchain · Smart Contracts · Supply Chain Security",
  },
  {
    title: "Secure Shield – Smart Cyber Guardian at Chip Level",
    desc: "Developed a hardware-level cyber security solution with encryption and intrusion detection to protect sensitive data from real-time threats.",
    tech: "Cyber Security · Encryption · Intrusion Detection",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="projects-tag">PROJECTS</span>
        <h2>Academic & Technical Projects</h2>
        <p>
          A selection of projects demonstrating my skills in Cyber Security,
          Blockchain, and Data Analytics.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="desc">{project.desc}</p>
            <span className="tech">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
