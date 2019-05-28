// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Init express
const app = express();

// Import routes
const calls = require("./routes/calls");

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public/")));

app.use("/api", calls);

app.listen(4000, () => {
	console.log("Server on");
});
