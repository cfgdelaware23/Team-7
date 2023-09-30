import express from 'express';
import connectToDB from './database.js';
import User from "./models/User.js"
import bodyParser from "body-parser"
// const User = require('./models/User.js')
// import { getUser, createUser } from './userFunctions.js'

const app = express();

connectToDB();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

/** Endpoint for registering a new user */
app.post("/create", async (req, res) => {

  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.listen(8080, () => {
  console.log('Server started on port 8080');
});