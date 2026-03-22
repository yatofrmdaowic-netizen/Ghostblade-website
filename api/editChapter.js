export default function handler(req,res){
  const { anime,index,title,imageURL,link } = req.body;
  if(inMemoryChapters[anime] && inMemoryChapters[anime][index]){
    inMemoryChapters[anime][index]={ title,imageURL,link };
    return res.status(200).json({ message:"Chapter updated", chapters: inMemoryChapters[anime] });
  }
  res.status(400).json({ error:"Chapter not found" });
}
