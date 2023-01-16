const Syllabus = require('../models/syllabus')

exports.postSyllabus = async (req, res, next) => {
    Syllabus.findOne({ syllabusType: req.body.syllabusType })
        .then(result => {
            if (!result) {
                const syllabus = new Syllabus({
                    syllabusType: req.body.syllabusType,
                    syllabus: req.body.syllabus
                })
                return syllabus.save()
            }
            else {
                return res.send('already exists')
            }
        }).then(syll => {
            res.send(syll)
        }).catch(err => {
            res.send('invalid credentials')
        })
}

exports.getSyllabus = async (req, res, next) => {
    let a = {}
    const data = await Syllabus.find({})
    return res.send(data)
}   