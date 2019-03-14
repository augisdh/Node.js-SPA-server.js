const express = require('express')
const serveStatic = require('serve-static')
const compression = require('compression')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(compression()) // Compresses files to gzip
app.use(serveStatic(path.join(__dirname, '/dist/')))
app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + "/dist/index.html")
})

app.listen(port)

console.log('Listening on port: ' + port)