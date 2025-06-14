const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/notificationSystem");

app.use("/api", router);

app.listen(3000, () => console.log("Server running on port 3000"));
