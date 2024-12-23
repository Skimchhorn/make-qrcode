import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import express from "express";
import morgan from "morgan";
import { fileURLToPath} from "url";
import {dirname} from "path";
import path from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "views")));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res)=>{

  console.log(req.body);
  
  const url = req.body.url;
  console.log(url);
  if(isValidURL(url)){
    const fileName = "qr_img.png";
    var qr_svg = qr.image(url);
    const filePath = path.join(__dirname,"views", fileName);
    qr_svg.pipe(fs.createWriteStream(filePath));
    const imagePath = `/${fileName}`;
    res.render( "index.ejs", {  imagePath }); 
  }
  else if (url == null) {
    res.render("index.ejs");
  }
  else{
    res.render( "index.ejs", { newText: "Your input is wrong 😡" }); 
  }

});


app.listen(port, ()=>{
  console.log("Listening on port " + port);
});



function isValidURL(urlString){
  try{
    new URL(urlString);
    return true;
  }catch(e){
    return false;
  }
}