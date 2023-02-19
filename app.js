const express = require('express')
const app = express();


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send();
})


app.listen(5001, () => {
    console.log('gol started on server http://localhost:5001')
})