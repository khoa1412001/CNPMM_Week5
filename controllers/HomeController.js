var { blogs } = require("../models/Blogs");
exports.getAll = (req, res) => {
  res.render("home", { blogs: blogs });
};
