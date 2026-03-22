import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChapterGrid from "../components/ChapterGrid";

export default function SSS() {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    fetch("/api/chapters?anime=SSS")
      .then(res => res.json())
      .then(data => setChapters(data.chapters));
  }, []);
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>SSS Ranker Chapters</h2>
        <ChapterGrid chapters={chapters} />
      </main>
      <Footer />
    </>
  );
}
