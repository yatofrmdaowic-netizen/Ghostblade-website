import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center", padding: "50px 20px" }}>
        <h2>Welcome to 🔥 GhostBlade Hub 🔥</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6" }}>
          Your ultimate web hub for reading <strong>Solo Leveling</strong> chapters (1–179) and 
          <strong> SSS Ranker</strong> comics. Click below to start reading!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
          <a href="/solo"><button style={buttonStyle}>Solo Leveling Chapters</button></a>
          <a href="/sss"><button style={buttonStyle}>SSS Ranker Chapters</button></a>
          <a href="/admin"><button style={buttonStyle}>Admin Panel</button></a>
        </div>
      </main>
      <Footer />
    </>
  );
}

const buttonStyle = {
  background: "#ff3f3f",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px"
};
