import { useNavigate, Navigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("adminLoggedIn");

  // 🔒 Protect route
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>

      <div style={styles.cards}>
        <div style={styles.card} onClick={()=>navigate("/admin/certificates")}>
  📜 Manage Certificates
</div>

        <div style={styles.card}>💼 Manage Projects</div>
        <div style={styles.card}>📩 View Contact Messages</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "60px 40px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },

  logout: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#ef4444",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "#020617",
    border: "1px solid #1f2937",
    borderRadius: "14px",
    padding: "30px",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(0,0,0,0.6)",
  },
};

export default AdminDashboard;
