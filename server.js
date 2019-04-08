const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
const fs = require("fs");
const QuestionModel = require("./models/dataplayer")
mongoose.connect("mongodb://localhost:27017/web20-minihack", { useNewUrlParser: true }, (err) => {
  if (err) console.log(err)
  else console.log("connect to DB success");
  QuestionModel.find({}, (err, docs) => {
    if (err) console.log(err)
    else console.log(docs)
  })
})
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/screen.html");
});

app.post("/player", (req, res) => {
  console.log(req.body)


  QuestionModel.create(
    {
      player1: {
        playerName1: req.body.playerName1
      },
      player2: {
        playerName2: req.body.playerName2
      },
      player3: {
        playerName3: req.body.playerName3
      },
      player4: {
        playerName4: req.body.playerName4
      },
     
    },
    function (err) {
      if (err) return handleError(err);

      res.redirect("/games")
    });
})
// app.post("/score", (req, res) => {
//   console.log(req.body)


//   QuestionModel.create(
//     {
//       player1: {
//         PlayerScore: req.body.playerScore1
//       },
//       player2: {
//         PlayerScore: req.body.playerScore2
//       },
//       player3: {
//         PlayerScore: req.body.playerScore3
//       },
//       player4: {
//         PlayerScore: req.body.playerScore4
//       },
     
//     },
//     function (err) {
//       if (err) return handleError(err);

//       res.redirect("/games")    });
// })
app.get("/games", (req, res) => {

  QuestionModel.find({}, (err, docs) => {
    if (err) console.log(err)
    else
  

      res.redirect(`/games/${docs.length-1}`);

  })
})


app.get("/find", (req, res) => {

  QuestionModel.find({}, (err, docs) => {
    if (err) console.log(err)
    else
  

      res.send(docs);

  })
})





  app.get("/games/:roundgameid", (req, res) => {


    res.sendfile(__dirname + "/views/playscreen.html");
  })

  
 

  app.listen(1998, (err) => {
    if (err) console.log(err);
    else console.log("Success Server");
  });

