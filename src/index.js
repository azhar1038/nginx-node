import express from "express";
import { hostname } from "os";

const app = express();

app.use("/", (req, res) => {
  res.json({
    msg: "Hello World",
    hostname: hostname(),
  });
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
