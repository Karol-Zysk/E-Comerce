require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
}

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
