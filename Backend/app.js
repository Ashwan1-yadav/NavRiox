const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middlewares/error.middleware");
const contactUsRoute = require("./routes/contactUs.route");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(errorHandler);
app.use("/api/v1", contactUsRoute);


module.exports = app;
