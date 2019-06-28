const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/api/form", (req, res) => {
    console.log(req.body)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server.listening on port ${PORT}`)
})