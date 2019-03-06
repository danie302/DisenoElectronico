const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const express = require("express");
const path = require("path");
const app = express();
const gps = require("./config/routes");
const gpsModel = require("./models/syrusTracking");
let d;

server.on("error", err => {
	console.log(`server error:\n${err.stack}`);
	server.close();
});

server.on("message", (msg, rinfo) => {
	console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
	d = msg;
	if (d != null) {
		let gpsData = {
			id: null,
			syrusID: "Avangers",
			gpsTrama: msg
		};
		gpsModel.insertRaster(gpsData, function(error, data) {
			//si el usuario se ha insertado correctamente mostramos su info
			if (data && data.insertId) {
				console.log("/users/" + data.insertId);
			} else {
				console.log({ msg: "Error" });
			}
		});
	}
});

server.on("listening", () => {
	const address = server.address();
	console.log(`server listening ${address.address}:${address.port}`);
});

app.use("/gps", gps);

app.use(express.static(path.join(__dirname, "public/build")));

app.get("/map", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/map.html"));
});

app.get("/coord", (req, res) => {
	res.json(`${d}`);
});

app.listen(4000, () => {
	console.log("Server on");
});

server.bind(4001);
