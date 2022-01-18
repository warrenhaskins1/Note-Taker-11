const express = require('express');
//Add paths for api & html routes
// const path = require('path');
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();

//Set the PORT so that it doesnt auto default to 3001 or you may get errors
const PORT = process.env.Port || 3001;

app.use(express.static('public'));

//Add our middleware for json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Add folder for routes to seperate concerns
app.use("/", htmlRoutes);
app.use("api/", apiRoutes);



//Port listener
app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
