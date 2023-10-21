const mongoose = require("mongoose");

const WorkoutsSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  exercise_id: {
    type: String,
    required: true,
  },
  repetitions: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  break_time: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exercises",
  },
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;