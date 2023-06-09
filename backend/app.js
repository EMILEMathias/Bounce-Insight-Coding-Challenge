const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const countryRouter = require("./routes/API/countries/country");
app.use("/country", countryRouter);

app.listen(port);
console.log(`Server running at http:/localhost:${port}/`);
console.log("Script beginning date", Date.now());
