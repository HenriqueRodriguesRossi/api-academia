const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("exercises", ExerciseSchema)