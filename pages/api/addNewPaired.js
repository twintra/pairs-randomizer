// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "/public/../json/pool.json"
import pairedName from "/public/../json/paired_name.json"
import path from 'path';
const fs = require('fs');

function savePool(data) {
  console.log(data);
  const jsonDirectory = path.join(process.cwd(), 'json');
  fs.writeFileSync(jsonDirectory +'/pool.json', JSON.stringify(data));
}
function savePair(data) {
  console.log(data);
  const jsonDirectory = path.join(process.cwd(), 'json');
  fs.writeFileSync(jsonDirectory +'/paired_name.json', JSON.stringify(data));
}

export default function handler(req, res) {
  const newPool = { names_pool : pool.names_pool.filter(value=> value !== req.body.pair)}
  const newPairedName = {paired_name : [...pairedName.paired_name, req.body]}
  try {
    savePool(newPool);
    savePair(newPairedName);
    res.status(200).json({ status: "OK", data: "Save file complete" })

  } catch (error) {
    console.log(error);
    res.status(200).json({ status: "NO", data: "Save file unsuccessfully!", error: error })
    
  }
  

}

