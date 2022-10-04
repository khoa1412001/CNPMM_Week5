var { blogs } = require("../models/Blogs");
exports.getDetailBlog = (req, res) => {
  const id = Number(req.params.id);
  var blog = blogs.find((item) => item.id === id);
  res.render("BlogDetail", { blog: blog });
};
exports.addBlog = (req, res) => {
  var { title, content } = req.body;
  var length = blogs.length;
  var newBlog = {
    id: length != 0 ? blogs[length - 1].id + 1 : 0,
    title,
    content,
    comment: [],
  };
  blogs.push(newBlog);
  res.redirect("/");
};
exports.formBlog = (req, res) => {
  const id = Number(req.params.id);
  if (!id)
    res.render("FormBlog", {
      name: "Add new blog",
      action: "add_blog",
      blog: {
        content: "",
      },
    });
  else {
    res.render("FormBlog", {
      name: "Update blog",
      blog: blogs.find((item) => item.id === id),
      action: "update/" + id,
    });
  }
};
exports.addComment = (req, res) => {
  var { comment } = req.body;
  const id = Number(req.params.id);
  blogs[id].comment = [...blogs[id].comment, comment];
  res.redirect("/blog/" + id);
};
exports.deleteBlog = (req, res) => {
  const id = Number(req.params.id);
  //blogs = blogs.filter((item) => item.id != id);
  var num = blogs.findIndex((item) => item.id === id);
  blogs.splice(num, 1);
  res.redirect("/");
};
exports.updateBlog = (req, res) => {
  const id = Number(req.params.id);
  var { title, content } = req.body;
  var index = blogs.findIndex((item) => item.id === id);
  blogs[index].title = title;
  blogs[index].content = content;
  res.redirect("/blog/" + id);
};
