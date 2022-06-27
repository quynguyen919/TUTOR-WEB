const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const path = require('path');



var key = require("./keys/firebase-key.json");
<<<<<<< HEAD
const { request } = require("http");
const { response } = require("express");
=======
>>>>>>> 0d13eec0fdef64720a924a50db248459816bae87

admin.initializeApp({
    credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

<<<<<<< HEAD
app.get("/getAll", (req, res) => {
    let temp = request.query;
    console.log("API 2" + JSON.stringify(temp));
})

=======
>>>>>>> 0d13eec0fdef64720a924a50db248459816bae87
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

<<<<<<< HEAD
app.put("/api/:collectionName/:docId", async (res,req) => {
    let collectionName = req.body.collectionName;
    let docId = req.body.docId;

    let data = await firestore.collection(collectionName).doc(docId).update(req.body.data);
    response.send({
        message: "Update Successful!!!",
        updateTime: data.writeTime,
    });
})

=======
>>>>>>> 0d13eec0fdef64720a924a50db248459816bae87
app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running!!");
});