const {  uploadDrive } = require("./test")


let fs=require("fs")
let FormData=require("form-data")
let fetch=require("node-fetch")
const yandex="https://yandex.com/images/search?rpt=imageview&url="
module.exports={
    postImage:async(req,res)=>{
        try {
            uploadDrive(req.file.path)
            var fd = new FormData();
            fd.append("file",fs.createReadStream(req.file.path))
            fd.append("upload_preset","q4y1oiug")
        
               const data=await fetch("https://api.cloudinary.com/v1_1/dk6ifbred/upload", {
                method: "POST",
                body: fd
              })
                .then((res) => res.json())
                .then((res) => res)
                .catch((err) => console.log(err));


              res.render("result",{
                    google:`https://www.google.com/searchbyimage?site=search&sa=X&image_url=${data.url}`,
                    yandex:`https://yandex.com/images/search?rpt=imageview&url=${data.url}`
              })
    
        } catch (error) {
            console.log(error)
        }
       
        
    }
}