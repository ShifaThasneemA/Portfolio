import "./Tools.css";

const tools = [
  {
    name: "Kali Linux",
    category: "Cyber Security",
    desc: "Security-focused operating system used for penetration testing, vulnerability assessment and ethical hacking.",
  },
  {
    name: "Burp Suite",
    category: "Web Security",
    desc: "Web application security testing platform used to analyze web requests, responses and application vulnerabilities.",
  },
  {
    name: "Nmap",
    category: "Network Security",
    desc: "Network scanning tool used for host discovery, port scanning and service enumeration.",
  },
  {
    name: "Wireshark",
    category: "Network Analysis",
    desc: "Network protocol analyzer used to capture and analyze network traffic for security monitoring.",
  },
  {
    name: "Splunk",
    category: "SIEM & Log Analysis",
    desc: "Security monitoring platform used for log analysis, event monitoring and investigation of security alerts.",
  },
  {
    name: "Zeek",
    category: "Network Monitoring",
    desc: "Network security monitoring tool used to analyze traffic and generate security logs for threat detection.",
  },
  {
    name: "Metasploit",
    category: "Penetration Testing",
    desc: "Penetration testing framework used for vulnerability validation and authorized security assessments.",
  },
  {
    name: "YARA",
    category: "Threat Detection",
    desc: "Pattern-matching tool used to identify and classify suspicious files and malware based on defined rules.",
  },
];

function Tools() {
  return (
    <section className="tools-section">

      <div className="tools-header">
        <span className="tools-tag">TOOLS</span>

        <h1>Cyber Security Tools</h1>

        <p>
          Security tools I have learned and used for cybersecurity,
          penetration testing, web security and network analysis.
        </p>
      </div>

      <div className="tools-grid">

        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>

            <div className="tool-top">
              <span className="tool-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="tool-category">
                {tool.category}
              </span>
            </div>

            <h2>{tool.name}</h2>

            <p>{tool.desc}</p>

            <div className="tool-line"></div>

            <span className="tool-label">
              SECURITY TOOL
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Tools;