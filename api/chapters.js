import fs from "fs";
import path from "path";

export default function handler(req,res){
  const { anime } = req.query;
  const filePath = path.join(process.cwd(),"data",anime.toLowerCase()+".json");
  if(!fs.existsSync(filePath)) return res.status(404).json({ chapters:[] });
  const data = JSON.parse(fs.readFileSync(filePath,"utf-8"));
  res.status(200).json({ chapters:data });
}
