const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const path = require('path');



var key = require("./keys/firebase-key.json");
const { req } = require("http");
const { response, application } = require("express");

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

app.get("/api/:collection/:docId", async function(req, res) {
    let collectionName = req.params.collection;
    let docId = req.params.docId;
    let querySnapshot = await firestore.collection(collectionName).doc(docId).get();
    let result = querySnapshot.data();
    // console.log(result);
    res.send(result);
});

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

app.put("/api/:collection/:docId", async (req,res) => {
    let collectionName = req.body.collection;
    let docId = req.body.docId;

    let data = await firestore.collection(collectionName).doc(docId).update(req.body.data);
    res.send({
      message: "Update successful!!",
      updateTime: data.writeTime,
    });
  })

let Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}/`);
})