const mongoose = require("mongoose");
const model = mongoose.model;
const RoundGame = require("../schemas/dataplayer");
const   QuestionModel = model("dataplayer", RoundGame);
module.exports=QuestionModel