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

app.get("/api/:collectionName", async function(req, res) {
    let profile = req.params.collection;
    let docId = req.params.docId;
    let querySnapshot = await firestore.collection("profile").doc(docId).get();
    let result = querySnapshot.data();
    console.log(result);
    res.send(result);
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


app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running!!");
});