import express from "express";
import bodyParser from "body-parser";

var postName = ["example_mypost1"];
var postBody = ["example_post_body"];

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { postName });
});
app.get("/add_post", (req, res) => {
  res.render("adding_post.ejs");
});

app.post("/delete", (req, res) => {
  // const indexName = postName.indexOf()
  res.render("index.ejs", { postName });
});

app.post("/submit", (req, res) => {
  postName.push(req.body.add_post_name);
  postBody.push(req.body.add_post_body);
  res.render("index.ejs", { postName });
});
app.listen(3000, () => {
  console.log("Server running on a port 3000");
});
