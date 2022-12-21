const express = require('express')
const app = express()

app.post('/test-commit', (req, res) => {
    console.log('starting 2 face commit');
    res.send("a")
    res.end()
})

app.listen(5001, () => {
    console.log('Listening at port 5001')
})
