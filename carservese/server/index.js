const express = require("express");
const carRouter = require('./routes/car.routes')

const PORT = 8088

const app = express()

app.use(express.json())
app.use('/api', carRouter)

app.listen(PORT, () => console.log('Runing'))