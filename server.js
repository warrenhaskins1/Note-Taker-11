const express = require("express");

//Add dependency for api & html routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

//Set the PORT so that it doesnt auto default to 3001 or you may get errors with Heroku
const PORT = process.env.PORT || 3001;

//Add our middleware for json and urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Port listener
app.listen(PORT, () => {
  console.log(`Note Taker app is listening on PORT: ${PORT}`);
});
