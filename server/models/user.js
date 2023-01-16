const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dept:{
        type: String,
        required: true
    },
    regNo:{
        type: String,
        required: true
    },
    trainingType:{
        type: Array,
        required: true
    },
    trainingData:{
        type: Object,
    }
})

module.exports = mongoose.model('User', userSchema)