const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/190110910728", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("database is connected"));
