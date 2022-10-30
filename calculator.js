const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

// show index.html as first page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
	let num1 = Number(req.body.num1)
	let num2 = Number(req.body.num2)

	result = num1 + num2
	res.send(`Thanks! I got your submit the answer is:  ${result}`)
})

// BMI calculator
app.get("/bmicalculator", (req, res) => {
	res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
	let weight = parseFloat(req.body.weight)
	let height = parseFloat(req.body.height)

	result = (weight / (height / 100) ** 2).toFixed(2)
	res.send(`Your BMI is ${result}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
