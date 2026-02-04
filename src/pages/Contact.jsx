import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-tag">CONTACT</span>
        <h2>Get In Touch</h2>
        <p>
          Feel free to reach out for internships, collaborations, or
          opportunities in Cyber Security and Technology.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:shifathasneemameer@gmail.com">
            shifathasneemameer@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+916379098958">+91 63790 98958</a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/shifa-thasneem-ameer"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/shifa-thasneem-ameer
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/ShifaThasneemA"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ShifaThasneemA
          </a>
        </div>
      </div>
    </section>
  );
}

