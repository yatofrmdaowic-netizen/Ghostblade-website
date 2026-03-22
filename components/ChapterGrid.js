export default function ChapterGrid({ chapters }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px", padding: "20px" }}>
      {chapters.map((ch,i) => (
        <div key={i} style={{ background: "#1f1f1f", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
          <img src={ch.imageURL} alt={ch.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h3>{ch.title}</h3>
          <a href={ch.link} target="_blank" rel="noreferrer">
            <button style={{ background:"#ff3f3f", color:"#fff", border:"none", padding:"8px 12px", borderRadius:"5px", cursor:"pointer" }}>Read Official</button>
          </a>
        </div>
      ))}
    </div>
  );
}
