import express from "express";

import usersApi from "@server/api/users";

const app = express();

app.use("/api/users", usersApi);
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/rebecca", (req, res) => {
  res.send("Hi Girl!");
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${5000}`);
});
