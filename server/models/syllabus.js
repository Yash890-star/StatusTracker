const mongoose = require('mongoose')

const syllabusSchema = new mongoose.Schema({
    syllabusType:{
        type: String,
        required: true
    },
    syllabus: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Syllabus', syllabusSchema)