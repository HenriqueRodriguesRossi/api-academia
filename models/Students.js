const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type: String, 
        required: true
    },
    date_birth:{
        type: Date,
        required: true
    },
    cep:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    complement:{
        type: String,
        required: false
    },
    created_at:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Students", StudentSchema)