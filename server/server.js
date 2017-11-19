const express = require("express")

const app = express();


app.get('/', function (req, res) {
	res.send('<h1>kkfak</h1>')
});
app.get('/data', function (req, res) {
	res.json({name: 'imooc', type: 'it react'})
});

app.listen(9999, function () {
	console.log("listen on port 9999")
});