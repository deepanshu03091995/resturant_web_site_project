const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();
connectDb();
//rest object

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//Route
//URL http://localhost:8080
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant/", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>welcome to Food App server Base Project</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`.white.bgMagenta);
});
