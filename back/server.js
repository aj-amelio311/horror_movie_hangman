var express = require("express");
const MongoClient = require('mongodb').MongoClient;
var app = express();
var cors = require("cors");

app.use(cors({origin: '*'}));

const uri = "xxx"

app.use(express.json());
app.use(express.urlencoded());


app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.get("/", (req, resp) => {
  resp.send("awwyea")
})

app.get("/answers", (req, resp) => {
   MongoClient.connect(uri, (err, client) => {
     const db = client.db("hangman");
      db.collection("answers").find().toArray().then((docs) => {
        resp.send(docs)
      })
    })
})

app.get("/high_scores", (req, resp) => {
  MongoClient.connect(uri, (err, client) => {
    const db = client.db("hangman");
    db.collection("scores").find().sort({score: -1}).toArray().then((docs) => {
      resp.send(docs)
    })
  })
})

app.post("/add_high_score", (req, resp) => {
  console.log(req.body)
  MongoClient.connect(uri, (err, client) => {
    const db = client.db("hangman");
    db.collection("scores").insertOne(req.body, (err, result) => {
      if (err) {
        resp.send({
          "status": 200
        })
      } else {
        resp.send({
          "status": 400
        })
      }
    })

  })
})


app.listen(8080)
