const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', function(req, res){ //(req, res) => res.send('hello world'))
        res.sendFile('public/app.html', {root:'.'});

});

app.listen(port, ()=> console.log('example app listening on port ${port}!'))
