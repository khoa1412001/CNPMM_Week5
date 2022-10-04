const express = require("express");
var exphbs = require("express-handlebars");
const path = require("path");
const homeRoute = require("./routes/HomeRoute");
const blogRoute = require("./routes/BlogRoute");
const PORT = 5000;
const app = express();
//config handlebars
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//route
app.use("/blog", blogRoute);
app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
