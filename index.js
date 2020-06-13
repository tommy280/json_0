const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res, next) => {
    console.log(req.method, req.url)
    res.json(require('./responce.json'))
});

app.listen(port, () => console.log(`click http://localhost:${port}/ !`))
