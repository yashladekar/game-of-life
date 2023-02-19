const express = require('express')
const app = express();

const port = process.env.PORT || 4000;
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send();
})


app.listen(port, () => {
    console.log('gol started on server http://localhost:5001')
})

