const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const path = require('path');



var key = require("./keys/firebase-key.json");
const { request } = require("http");
const { response } = require("express");

admin.initializeApp({
    credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/:collection", async function(req, res) {
    let params = req.params.collection;
    let querySnapshot = await firestore.collection(params).get();
    let datas = await querySnapshot.docs.map((value)=>{
        let temp = value.data();
        return temp;
    });
    res.send(datas)
})

app.post("/api", async(req, res) => {
    let body = req.body;
    console.log(body);
try{
    let docName = body.data.name + "-" + Math.round(Math.random() * 10).toString();

    let result = await firestore
        .collection(body.collectionName)
        .doc(docName)
        .set(body.data);

    res.send({
        message: "Successful!!!",
    });}
    catch(error){
        console.log(error.toString())
    }
});


let Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}/`);
})