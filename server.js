//* Init
const express = require("express");
const app = express();
const connectDB = require("./config/db");

//* Connect to database
connectDB();

//* Middleware
app.use(express.json({ extended: false }));

//* Create Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connected to server.... at http://127.0.0.1:${PORT}`);
});

//* Request & Response
app.get("/", (req, res) => res.json({ msg: "Welcome to the World Quiz" }));

//* Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
