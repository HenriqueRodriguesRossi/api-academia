const mongoose = require("mongoose")

const WorkoutsStudentsSchema = new mongoose.Schema({
    workout_id:{
        type: String,
        required: true
    },
    day_of_week:{
        type: String,
        required: true
    },
    student_id:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("WorkoutStudent", WorkoutsStudentsSchema)