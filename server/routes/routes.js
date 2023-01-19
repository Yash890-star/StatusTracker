const router = require('express').Router()

const authRoutes = require('../controller/Auth')
const syllabusRoutes = require('../controller/syllabus')
const userRoutes = require('../controller/user')

//Authentication
router.post('/register', authRoutes.postRegister)
router.post('/login', authRoutes.postLogin)
router.post('/logout',authRoutes.postLogout)
router.get('/syllabusoptions', authRoutes.getSyllabusOptions)

//Syllabus
router.post('/syllabus', syllabusRoutes.postSyllabus)
router.get('/getSyllabus', syllabusRoutes.getSyllabus)

//User
router.get('/user', userRoutes.getUser)
router.post('/update', userRoutes.postUpdateSyllabus)

module.exports = router