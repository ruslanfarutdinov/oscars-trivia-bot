const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const questions = ['Which movie won the Best Picture award in 2018?'];

app.post('/question', (req, res) => {	
	

	res.status(200);
	res.send(req.body);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Listening on port 8080');
});
