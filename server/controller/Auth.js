const User = require('../models/user')
const Syllabus = require('../models/syllabus')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function test (arr) {
    let newarr = []
    for (const iterator of arr) {
        const trainingData = await Syllabus.findOne({syllabusType: iterator})
        newarr.push(trainingData.syllabus)
    }
    let b = {}, k = 0;
    for (let x of arr) {
        let g = {}
        for (let i of newarr[k]) {
            g[i] = [0, null]
        }
        b[x] = g;
        k++;
    }
    return b
}

exports.postRegister = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const userTrainingData = await test(req.body.trainingType)
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        regNo: req.body.regNo,
        email: req.body.email,
        dept: req.body.dept,
        trainingType: req.body.trainingType,
        password: hashedPassword,
        trainingData: userTrainingData
    })
    try{
        const result = await user.save()
        console.log('saved')
        const { password, ...data } = await result.toJSON()
        res.send(data)
    }
    catch (err) {
        res.send('bad credentials')
        console.log("bad creds")
    }
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

exports.postLogout = (req, res, next) => {
    res.cookie('jwt', '', { maxAge: 0 })
    return res.send({
        body: "success"
    })
}

exports.getSyllabusOptions = async (req,res,next) => {
    const data = await Syllabus.find()
    let finalResponse = {}
    let response = []
    for (let x in data){
        response.push(data[x].syllabusType)
    }
    finalResponse['data'] = response
    res.send(finalResponse)
    
}