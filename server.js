const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Add root route to fix "Cannot GET /" on Render
app.get("/", (req, res) => {
  res.send("Student Login Backend is working 🚀");
});

// Student routes
app.use("/api", studentRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
