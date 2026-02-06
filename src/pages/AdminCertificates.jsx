import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function AdminCertificates() {
  const isAdmin = localStorage.getItem("adminLoggedIn");
  if (!isAdmin) return <Navigate to="/admin" replace />;

  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [year, setYear] = useState("");

  const load = async () => {
    const r = await fetch("http://localhost:5000/api/certificates");
    setList(await r.json());
  };

  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, issuer, year }),
    });
    setTitle(""); setIssuer(""); setYear("");
    load();
  };

  const del = async (id) => {
    await fetch(`http://localhost:5000/api/certificates/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div style={S.page}>
      <h2>Manage Certificates</h2>

      <form onSubmit={add} style={S.form}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <input placeholder="Issuer" value={issuer} onChange={e=>setIssuer(e.target.value)} required />
        <input placeholder="Year" value={year} onChange={e=>setYear(e.target.value)} required />
        <button>Add</button>
      </form>

      <ul style={S.list}>
        {list.map(c => (
          <li key={c._id} style={S.item}>
            <span>{c.title} — {c.issuer} ({c.year})</span>
            <button onClick={()=>del(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const S = {
  page:{ minHeight:"100vh", background:"#020617", color:"#fff", padding:"60px" },
  form:{ display:"flex", gap:"10px", margin:"20px 0" },
  list:{ listStyle:"none", padding:0 },
  item:{ display:"flex", justifyContent:"space-between", margin:"8px 0" }
};

export default AdminCertificates;
