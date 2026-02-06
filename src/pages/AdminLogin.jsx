import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSuccess(false);
        setMessage(data.message || "Login failed ❌");
        return;
      }

      // ✅ LOGIN SUCCESS
      setSuccess(true);
      setMessage(data.message || "Login successful ✅");

      // 🔐 SAVE LOGIN STATE
      localStorage.setItem("adminLoggedIn", "true");

      // ⏩ REDIRECT TO DASHBOARD
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);

    } catch (err) {
      setSuccess(false);
      setMessage("Server error ❌");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

          {message && (
            <p style={success ? styles.success : styles.error}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #020617, #000)",
  },

  card: {
    marginTop: "-60px",
    background: "#020617",
    padding: "30px 28px",
    borderRadius: "14px",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)",
    width: "300px",
    border: "1px solid #1f2937",
  },

  title: {
    textAlign: "center",
    marginBottom: "22px",
    color: "#fff",
    fontSize: "24px",
    letterSpacing: "0.5px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #374151",
    background: "#020617",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    marginTop: "6px",
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#f59e0b",
    color: "#000",
    fontWeight: "600",
    cursor: "pointer",
  },

  success: {
    marginTop: "10px",
    color: "#22c55e",
    textAlign: "center",
    fontWeight: "600",
  },

  error: {
    marginTop: "10px",
    color: "#f87171",
    textAlign: "center",
    fontWeight: "600",
  },
};

export default AdminLogin;
