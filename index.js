require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send("why Twitter!");
})

app.get("/login", (req, res) => {
  res.send('Welcome');
})

app.get('/logout', (req, res) => {
  res.send("You have been logged out");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})