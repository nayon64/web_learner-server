const express = require('express')
const app = express()
const cors = require("cors")


// select port 
const port = process.env.PROT || 5000


// app use cors middleware
app.use(cors())


// select courses data
const courses = require("./data/courses.json")

// response courses data in /courses api
app.get("/courses", (req, res) => {
	res.send(courses)
})


app.listen(port, () => {
	console.log('Server is running port', port)
})