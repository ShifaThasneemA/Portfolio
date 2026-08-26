import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "HR Data Visualization Tool",
    desc:
      "A Python-based HR Data Visualization Tool that connects to a MySQL database using XAMPP and generates different visualizations for easy HR data analysis.",
    tech: "Python · Pandas · MySQL · Matplotlib",

    details: {
      abstract: `This project is a Python-based HR Data Visualization Tool that connects to a MySQL database using XAMPP and retrieves data from user-selected tables.

The system uses Pandas for data handling and Matplotlib to generate different visualizations such as bar graphs, line graphs, pie charts, histograms, and scatter plots.

It helps users analyze HR data easily and understand patterns and relationships through graphical representation.`,

      technologies: [
        "Python – Core programming",
        "Pandas – Data handling and analysis",
        "PyMySQL – MySQL database connectivity",
        "MySQL / XAMPP – Database management",
        "Matplotlib – Data visualization",
      ],

      novelty: `The main novelty of this project is its dynamic visualization approach.

Instead of creating separate programs for different datasets, the system allows users to enter a table name and select columns dynamically to generate different types of graphs.

This provides a simple and flexible way to explore HR data directly from a MySQL database without manually exporting the data.`,
    },
  },

  {
    title: "Blockchain-Based Farmer Transparency Application",
    desc:
      "A blockchain-based application that provides secure and tamper-proof tracking of agricultural products from farm to consumer.",
    tech: "Blockchain · Smart Contracts · Supply Chain Security",

    details: {
      abstract: `A blockchain-based Farmer Transparency App that provides secure and tamper-proof tracking of agricultural products from farm to consumer.

It enables transparent pricing, verified product history, and secure transactions using blockchain and smart contracts.`,

      technologies: [
        "Frontend: React / Flutter",
        "Backend: Node.js / Python",
        "Blockchain: Ethereum / Hyperledger Fabric",
        "Smart Contracts: Solidity",
        "Database: MySQL / MongoDB",
        "QR Code: Product traceability",
      ],

      novelty: `• Tamper-proof farm-to-consumer tracking

• Transparent price history

• Smart contract-based transactions

• QR-based product verification

• Reduces fraud and improves farmer trust`,

      architecture:
        "Farmer → Mobile/Web App → Backend API → Blockchain + Smart Contract → Database → Consumer",

      flow: `Farmer registers produce

↓

Details stored

↓

Blockchain records transactions

↓

QR code generated

↓

Consumer scans QR

↓

Origin, price, and transaction history verified.`,
    },
  },

  {
    title: "Secure Shield – Smart Cyber Guardian at Chip Level",
    desc:
      "Developed a hardware-level cyber security solution with encryption and intrusion detection to protect sensitive data from real-time threats.",
    tech: "Cyber Security · Encryption · Intrusion Detection",

    details: {
      abstract: `SecureShield is a guardian-level cybersecurity system designed to protect IoT and embedded devices from both cyber threats and physical tampering.

The system integrates ESP32-S3 based hardware security, AI-driven anomaly detection, blockchain-based tamper-proof event logging, secure cryptographic key protection, and real-time autonomous response into a unified security architecture.

The system continuously monitors device activity and physical conditions to identify abnormal behavior or unauthorized access.

When a threat is detected, it generates an immediate alert and can initiate predefined protective actions such as access restriction or device lockdown.

Security events are securely recorded using blockchain to provide traceability and integrity.

Thus, SecureShield provides an intelligent, hardware-assisted security layer that acts as a continuous guardian for connected devices.`,

      technologies: [
        "ESP32-S3 – Main embedded controller and secure communication",
        "AI / Machine Learning – Real-time anomaly and abnormal-behavior detection",
        "Blockchain – Tamper-resistant security-event logging and traceability",
        "Secure Element / Cryptographic Security – Protection of sensitive keys and credentials",
        "Tamper Sensors – Detection of unauthorized physical access",
        "IoT Connectivity – Secure communication and device monitoring",
        "Real-Time Alert System – Immediate threat notification",
        "Automated Response Mechanism – Lockdown/protection action after threat detection",
        "Embedded Security Software – Device-level monitoring and control",
      ],

      novelty: `The key novelty of SecureShield is the unified combination of multiple security layers in a single guardian-level architecture.

1. Physical tamper detection at the device level.

2. AI-based behavioral anomaly detection for identifying suspicious activity.

3. Secure cryptographic key protection at the hardware level.

4. Blockchain-based immutable security-event recording for traceability.

5. Real-time autonomous response when a threat is detected.`,

      concept:
        "The inventive concept is the coordinated security workflow between physical sensing, AI analysis, hardware-based trust, blockchain evidence, and automated response, creating a continuous protection layer for IoT and embedded devices.",
    },
  },
];

const pdeiProject = {
  title:
    "Preliminary Digital Evidence Integrity & Case Management Tool (PDEI Tool)",

  details: {
    abstract: `The Preliminary Digital Evidence Integrity & Case Management Tool (PDEI Tool) is a lightweight software solution designed to help small police stations manage cyber crime cases and preserve the integrity of digital evidence during preliminary investigations.

The system allows officers to register cases, upload and organize digital evidence, generate unique hash values, and verify whether evidence has been modified. It also maintains basic audit and chain-of-custody records to improve traceability and accountability.

By providing a simple and low-cost interface, the proposed system reduces dependency on complex forensic software and supports secure and systematic handling of digital evidence.`,

    technologies: [
      "Frontend: HTML, CSS, JavaScript",
      "Backend: Python",
      "Framework: Flask",
      "Database: SQLite",
      "Hashing Algorithm: SHA-256",
      "File Handling: Python File System",
      "Report Generation: Python-based reporting",
      "Platform: Windows / Local Computer",
    ],

    novelty: `The main novelty of the PDEI Tool is its combination of basic case management and digital evidence integrity verification in a single lightweight system.

Unlike complex forensic platforms designed for expert investigators, this tool is intended for preliminary use by small police stations.

The system automatically generates a SHA-256 hash when evidence is uploaded and compares it during later verification to identify possible modifications.

It also maintains an audit trail for evidence-related activities, providing an additional layer of accountability.`,

    architecture: `User / Police Officer

↓

Web Interface

↓

Flask Application Server

↓

Case Management Module

↓

Evidence Management Module

↓

SHA-256 Integrity Verification

↓

SQLite Database + Secure Evidence Storage

↓

Audit / Chain of Custody Logs

↓

Forensic Report Generation`,

    components: [
      "Presentation Layer – Case registration, evidence upload, verification and report interface.",
      "Application Layer – Processes requests and manages case and evidence operations.",
      "Integrity Layer – Generates and verifies SHA-256 hash values.",
      "Data Layer – Stores case information, evidence metadata and audit logs.",
      "Evidence Storage – Maintains the uploaded digital evidence files separately from metadata.",
    ],
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">
        <span className="projects-tag">PROJECTS</span>

        <h2>Technical Projects</h2>

        <p>
          A selection of projects demonstrating my skills in Cyber Security,
          Blockchain, and Data Analytics.
        </p>
      </div>

      {/* TECHNICAL PROJECTS */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>

            <p className="desc">{project.desc}</p>

            <span className="tech">{project.tech}</span>

            <button
              className="view-details"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
            >
              Explore →
            </button>
          </div>
        ))}
      </div>

      {/* ACADEMIC PROJECTS */}
      <div className="academic-projects">

        <div className="academic-projects-header">
          <span className="projects-tag">
            ACADEMIC PROJECTS
          </span>

          <h2>Academic Projects</h2>
        </div>

        <div className="academic-projects-grid">

          {/* MINI PROJECT */}
          <div className="academic-project-card">
            <h3>
              Preliminary Digital Evidence Integrity & Case Management Tool
            </h3>

            <p>
              A lightweight system for managing cyber crime cases and
              preserving the integrity of digital evidence during
              preliminary investigations.
            </p>

            <button
              className="view-details"
              onClick={() => setSelectedProject(pdeiProject)}
            >
              Explore →
            </button>
          </div>

          {/* FINAL PROJECT */}
          <div className="academic-project-card">
            <h3>Final Project</h3>

            <p>
              Final year project details will be added here.
            </p>

            <button className="view-details">
              Explore →
            </button>
          </div>

        </div>
      </div>

      {/* PROJECT DETAILS POPUP */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>

            <h3>Abstract</h3>

            <p className="modal-text">
              {selectedProject.details.abstract}
            </p>

            <h3>Technologies Used</h3>

            <ul>
              {selectedProject.details.technologies.map(
                (technology, index) => (
                  <li key={index}>{technology}</li>
                )
              )}
            </ul>

            <h3>Novelty</h3>

            <p className="modal-text">
              {selectedProject.details.novelty}
            </p>

            {selectedProject.details.architecture && (
              <>
                <h3>Architecture</h3>

                <p className="modal-text architecture">
                  {selectedProject.details.architecture}
                </p>
              </>
            )}

            {selectedProject.details.components && (
              <>
                <h3>Architecture Components</h3>

                <ol>
                  {selectedProject.details.components.map(
                    (component, index) => (
                      <li key={index}>{component}</li>
                    )
                  )}
                </ol>
              </>
            )}

            {selectedProject.details.flow && (
              <>
                <h3>Project Flow</h3>

                <p className="modal-text architecture">
                  {selectedProject.details.flow}
                </p>
              </>
            )}

            {selectedProject.details.concept && (
              <>
                <h3>Inventive Concept</h3>

                <p className="modal-text">
                  {selectedProject.details.concept}
                </p>
              </>
            )}

          </div>
        </div>
      )}

    </section>
  );
}