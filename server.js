const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.static('public'));

//Add our middleware for json and urlencoded

//Add folder for routes to seperate concerns

//add uuid helper

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
