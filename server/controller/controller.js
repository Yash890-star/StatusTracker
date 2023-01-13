const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.postRegister = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        dept: req.body.dept,
        trainingType: req.body.trainingType,
        regNo: req.body.regno,
        password: hashedPassword,
    })
    const result = await user.save()
    const { password, ...data } = await result.toJSON()
    res.send(data)
}

exports.postLogin = async (req, res, next) => {
    const userLogin = await User.findOne({ email: req.body.email })
    if (!userLogin) {
        return res.status(404).send({
            message: "user not found"
        })
    }
    if (!await bcrypt.compare(req.body.password, userLogin.password)) {
        return res.status(400).send({
            message: "invalid credentials"
        })
    }
    const token = jwt.sign({ _id: userLogin._id }, "mysecretkey")
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.send({
        message: "success"
    })
}

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
        return res.status(401).send({
            message: "unauthenticated"
        })
    }
}

exports.postLogout = (req, res, next) => {
    res.cookie('jwt', '', { maxAge: 0 })
    return res.send({
        body: "success"
    })
}