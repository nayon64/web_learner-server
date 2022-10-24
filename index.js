const express = require('express')
const app = express()
const cors = require("cors")

// select port 
const port = process.env.PROT || 5000

// app use cors middleware
app.use(cors())


app.listen(port, () => {
	console.log('Server is running port', port)
})