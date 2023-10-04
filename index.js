const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send({ message: "Exercise 8.2 : Deploying to Node.js to Firebase as Function" })
})

