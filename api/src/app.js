const express = require("express");
const bodyParser = require("body-parser");

const { PORT, HOST } = require("./config");
const { connectDB } = require("./utils/db");
const { User } = require("./models/user");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/users/add", async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    await newUser.save();
    res.redirect("/users");
  } catch (error) {
    res.json({ error });
  }
});

app.get("/users/delete", async (req, res) => {
  try {
    await User.deleteMany({ firstName: /Ivan/ });
    res.redirect("/users");
  } catch (error) {
    res.json({ error });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.render("users", { users });
    // res.json({ users });
  } catch (error) {
    res.status(404).json({ error });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
};

connectDB()
  .on("error", console.error.bind(console, "connection error:"))
  .on("open", startServer);
