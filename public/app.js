const express = require('express')
const app = express()
const port = 3000

app.use(express.static('resources'))
app.get('/', function(req, res){ //(req, res) => res.send('hello world'))
	res.sendFile('app.html', {root:'.'});
	
});


app.listen(port, ()=> console.log('example app listening on port ${port}!'))
