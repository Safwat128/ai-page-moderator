const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Page Moderator is running!");
});

app.get("/webhook", (req, res) => {
  res.send("Webhook is working!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
