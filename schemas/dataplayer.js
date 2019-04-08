const mongoose = require("mongoose");
const schema = mongoose.Schema;
const RoundGame = new schema({
    player1: {
        playerName1: {
            type: String, require: true, default: "name",
        } , 
        PlayerScore: [{ type: Number, default: 0 }]
    },
    player2: {
        playerName2: {
            type: String, require: true, default: "name",
        } , 
        PlayerScore: [{ type: Number, default: 0 }]
    },
    player3: {
        playerName3: {
            type: String, require: true, default: "name",
        } , 
        PlayerScore: [{ type: Number, default: 0 }]
    },
    player4: {
        playerName4: {
            type: String, require: true, default: "name",
        } , 
        PlayerScore: [{ type: Number, default: 0 }]
    },
})
module.exports = RoundGame;
