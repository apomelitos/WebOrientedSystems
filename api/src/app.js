const express = require("express");

const { PORT, HOST } = require("./config");
const { connectDB } = require("./utils/db");
const { User } = require("./models/user");

const app = express();

app.get("/users", async (req, res) => {
  try {
    const user = new User({ firstName: "Ivan", lastName: "Ivanov" });
    await user.save();
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.send({ error });
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
