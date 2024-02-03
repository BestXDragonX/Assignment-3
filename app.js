const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bmi.html'));
});

app.post('/calculateBMI', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  // BMI Calculation
  const bmi = weight / ((height / 100) * (height / 100));

  // Redirect to the results page with the BMI value in the query parameter
  res.redirect(`${bmi.toFixed(1)}`);
});

app.get('/results', (req, res) => {
  const bmi = req.query.bmi;
  res.send(`${bmi}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
