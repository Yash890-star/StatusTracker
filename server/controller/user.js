const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.getUser = async (req, res, next) => {
    try {
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, "mysecretkey")
        if (!claims) {
            return res.status(401).send({
                message: "unauthenticated"
            })
        }
        const user = await User.findOne({ _id: claims._id })
        const { password, ...data } = user.toJSON()
        res.send(data)
    } catch (err) {
        console.log(err)
        return res.status(401).send({ 
            message: "unauthenticated"
        })
    }
}

exports.postUpdateSyllabus = async (req, res, next) => {
    try {
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, "mysecretkey")
        if (!claims) {
            return res.status(401).send({
                message: "unauthenticated"
            })
        }
        const user = await User.findOne({ _id: claims._id })
        user.trainingData = req.body.data.trainingData
        await user.save()
        res.send("updated")
    } catch (err) {
        return res.status(401).send({
            message: "unauthenticated"
        })
    }
}