import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  const [anime, setAnime] = useState("Solo");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [link, setLink] = useState("");
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`/api/chapters?anime=${anime}`)
      .then(res => res.json())
      .then(data => setChapters(data.chapters));
  }, [anime]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/addChapter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ anime, title, imageURL, link })
    });
    const data = await res.json();
    alert(data.message);
    setChapters(data.chapters || chapters);
    setTitle(""); setImageURL(""); setLink("");
  };

  return (
    <>
      <Header />
      <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Panel (No login)</h2>
        <form onSubmit={handleAdd} style={{ display: "grid", gap: "10px", marginBottom: "30px" }}>
          <select value={anime} onChange={e => setAnime(e.target.value)}>
            <option value="Solo">Solo Leveling</option>
            <option value="SSS">SSS Ranker</option>
          </select>
          <input type="text" placeholder="Chapter Title" value={title} onChange={e => setTitle(e.target.value)} required />
          <input type="text" placeholder="Image URL" value={imageURL} onChange={e => setImageURL(e.target.value)} required />
          <input type="text" placeholder="Read Link" value={link} onChange={e => setLink(e.target.value)} required />
          <button type="submit" style={{ padding: "10px", background: "#ff3f3f", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Add Chapter</button>
        </form>

        <h3>Current Chapters ({anime})</h3>
        <ul>
          {chapters.map((ch, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              <strong>{ch.title}</strong> - <a href={ch.link} target="_blank" rel="noreferrer">Read Link</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
