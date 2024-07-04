require("dotenv").config();
const express = require("express");
const routes = require("./routes/indexRouter.js");

const app = express();

app.use(express.json());

app.use(routes);

app.all("*", (req, res) => {
  return res.status(404).json({
    mensagem: "Verify that the requested route is correct and try again.",
  });
});

app.listen(process.env.PORT || 3000);
