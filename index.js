import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/home", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(port, () => {
  console.log(`Server Port: ${port}`);
});
