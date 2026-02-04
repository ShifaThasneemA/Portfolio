import { useState } from "react";
import "./Certifications.css";

import paloalto from "../assets/certificates/paloalto-cloud-security.jpg";
import elysiumPython from "../assets/certificates/elysium-python.jpg";
import elysiumIntern from "../assets/certificates/elysium-internship.jpg";
import octanet from "../assets/certificates/octanet-python-internship.jpg";
import guviAI from "../assets/certificates/guvi-generative-ai.jpg";
import guviPython from "../assets/certificates/guvi-python-zero-hero.jpg";
import infosys from "../assets/certificates/infosys-security-cpp.jpg";
import msFabric from "../assets/certificates/microsoft-fabric.jpg";
import msPython from "../assets/certificates/microsoft-python-error.jpg";
import msGithub from "../assets/certificates/microsoft-github.jpg";

const certificates = [
  {
    img: paloalto,
    title: "Cloud Security Fundamentals",
    issuer: "Palo Alto Networks – Cybersecurity Academy",
    year: "2025",
  },
  {
    img: elysiumPython,
    title: "Core & Advanced Python Programming",
    issuer: "Elysium Academy",
    year: "2025",
  },
  {
    img: elysiumIntern,
    title: "Python Internship",
    issuer: "Elysium Technologies Pvt Ltd",
    year: "2025",
  },
  {
    img: octanet,
    title: "Python Development Internship",
    issuer: "OctaNet Services Pvt Ltd",
    year: "2024",
  },
  {
    img: guviAI,
    title: "Generative AI Learnathon",
    issuer: "GUVI (Google for Education Partner)",
    year: "2024",
  },
  {
    img: guviPython,
    title: "Python Zero to Hero",
    issuer: "GUVI",
    year: "2024",
  },
  {
    img: infosys,
    title: "Security Programming (C & C++)",
    issuer: "Infosys Springboard",
    year: "2023",
  },
  {
    img: msFabric,
    title: "End-to-End Analytics using Microsoft Fabric",
    issuer: "Microsoft",
    year: "2024",
  },
  {
    img: msPython,
    title: "Python Error Handling",
    issuer: "Microsoft",
    year: "2024",
  },
  {
    img: msGithub,
    title: "Introduction to GitHub",
    issuer: "Microsoft",
    year: "2024",
  },
];

export default function Certifications() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="cert-section" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div
            className="cert-card"
            key={index}
            onClick={() => setActiveImage(cert.img)}
          >
            <img src={cert.img} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="cert-modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Certificate Preview" />
        </div>
      )}
    </section>
  );
}

