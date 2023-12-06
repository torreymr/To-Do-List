import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("greetingsPage.ejs");
});

app.post("/home", (req, res) => {
  const nameOfUser = req.body.username;
  res.send(`<h1>Your Name is ${nameOfUser}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server Port: ${port}`);
});
