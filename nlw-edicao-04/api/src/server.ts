import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.send("hello, world!")
});

app.post('/users', (req, res) => {
  return res.json({ message: "hello, world!" })
});

app.listen(3333, () => console.log("Server is running!"));
