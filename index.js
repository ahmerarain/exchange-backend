require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectMongo } = require("./mongoose");
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());

require("./routes")(app);

app.listen(81, async () => {
  await connectMongo();
  console.log(`App listening on port 81`);
});
