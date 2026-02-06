import { useEffect, useState } from "react";
import "./Certificates.css";

function Certifications() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/certificates")
      .then(res => res.json())
      .then(data => setCertificates(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="cert-section">
      <h2 className="cert-title">Certifications</h2>

      <div className="cert-grid">
        {certificates.map(cert => (
          <div className="cert-card" key={cert._id}>
            <img
              src={`/certificates/${cert.image}`}
              alt={cert.title}
            />
            <h3>{cert.title}</h3>
            <p>{cert.organization}</p>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
