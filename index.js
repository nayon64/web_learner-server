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
app.get("/courses/:id", (req, res) => {
	const id = req.params.id
	const singleCourse= courses.find(course=>course._id==id)
	res.send(singleCourse)
})


app.listen(port, () => {
	console.log('Server is running port', port)
})