import express from "express";

const PORT = 5000;
const app = express();

app.use(express.static("static"));
app.use(express.json());
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});
