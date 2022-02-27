const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const queryRoutes = require("./routes/queryRoutes");
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/query", queryRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
