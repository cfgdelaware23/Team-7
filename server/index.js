import express from 'express';
import connectToDB from './database.js';

const app = express();

connectToDB();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});