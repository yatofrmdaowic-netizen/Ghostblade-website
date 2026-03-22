export default function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center", background: "#1f1f1f" }}>
      <h1 style={{ margin: "0" }}>🔥 GhostBlade Hub 🔥</h1>
      <nav style={{ marginTop: "10px" }}>
        <a href="/solo" style={linkStyle}>Solo Leveling</a>
        <a href="/sss" style={linkStyle}>SSS Ranker</a>
        <a href="/admin" style={linkStyle}>Admin Panel</a>
      </nav>
    </header>
  );
}

const linkStyle = { margin: "0 10px", color: "#fff", textDecoration: "none" };
