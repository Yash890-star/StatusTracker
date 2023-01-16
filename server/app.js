const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))
const URI = "mongodb+srv://root:Trojan890.@statustracker.c2i9rsi.mongodb.net/?retryWrites=true&w=majority"

app.use(bodyParser.json())
app.use('/api', routes)

mongoose.connect(URI)
.then(() => {
    app.listen(8080, () => {
        console.log('listening')
    })
}).catch((err) => {
    console.log(err)
})

