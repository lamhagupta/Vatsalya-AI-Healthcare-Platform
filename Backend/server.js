require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vatsalya Backend Running");
});

app.get("/api/hospitals", (req, res) => {
  const sql = "SELECT * FROM hospitals";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err.message
      });
    }

    res.json(result);
  });
});

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Vatsalya Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});