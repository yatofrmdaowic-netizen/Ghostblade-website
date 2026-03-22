let inMemoryChapters = { Solo: [], SSS: [] };
export default function handler(req,res){
  const { anime,title,imageURL,link } = req.body;
  if(!anime||!title||!imageURL||!link) return res.status(400).json({ error:"All fields required" });
  if(!inMemoryChapters[anime]) inMemoryChapters[anime]=[];
  inMemoryChapters[anime].push({ title,imageURL,link });
  res.status(200).json({ message:"Chapter added", chapters: inMemoryChapters[anime] });
}
