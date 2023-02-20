import express from "express";

const PORT = 5000;
const app = express();
const router = express.Router();

app.use(express.static("static"));
app.use(express.json());
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

router.post("/loremIpsum", (req, res) => {
  res.json({ test: "test" });
});

app.use(router);
