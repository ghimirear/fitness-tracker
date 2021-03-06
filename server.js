const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// routes
require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
