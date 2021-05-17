const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");


const uploadDrive=(data)=>{
const CLIENT_ID = `521316038759-dut3u0v12uu3a605b5610ndpnpr3r361.apps.googleusercontent.com`;
const CLIENT_SECRET = `BwbvPQrVc7ly8Hn8C9oLjaJI`;
const REDIRECT_URI = `https://developers.google.com/oauthplayground`;

const REFRESH_TOKEN =`1//04E6aCPQHmWykCgYIARAAGAQSNwF-L9Irflz-qdgbdtuZn-TKf_b9Z_opwfjInXG0HxeaX1LsvInjziJvlmhAzDqa9-ZgonrxNCk`
const clinet = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
clinet.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const drive = google.drive({
  version: "v3",
  auth: clinet,
});
const filepath = data
async function updateFile(){
    try {
        const response=await drive.files.create({
            requestBody:{
                 name:"data",
                 mimeType:"image/jpg"
            },
            media:{
                mimeType:"image/jpg",
                body:fs.createReadStream(filepath)
            }
        })

    } catch (error) {
        console.log(error)
    }
}
updateFile()
}


module.exports={
    uploadDrive
}
