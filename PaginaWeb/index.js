const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const express = require("express");
const path = require("path");
const app = express();
const gps = require("./config/routes");
const gpsModel = require("./models/syrusTracking");
let d, data;

server.on("error", err => {
	console.log(`server error:\n${err.stack}`);
	server.close();
});

server.on("message", (msg, rinfo) => {
	console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
	d = msg.toString("utf8");
	if (d != null) {
		let nWeeks, day, time, lon, lat, newMsg;
		// >REV002041663724+1099304-0748281400000032;ID=AVENGERS<
		let newData = d;
		newMsg = newData.split("");
		nWeeks = `${newMsg[6]}${newMsg[7]}${newMsg[8]}${newMsg[9]}`; // Number of weeks since 00:00 AM January 6, 1980
		day = `${newMsg[10]}`; // Day of week. From 0 to 6 where 0 is Sunday.
		time = `${newMsg[11]}${newMsg[12]}${newMsg[13]}${newMsg[14]}${newMsg[15]}`; // Time of the generated report. Seconds since 00:00 of the current date.
		lat = `${newMsg[16]}${newMsg[17]}${newMsg[18]}.${newMsg[19]}${newMsg[20]}${
			newMsg[21]
		}${newMsg[22]}${newMsg[23]}`;
		lon = `${newMsg[24]}${newMsg[25]}${newMsg[26]}${newMsg[27]}.${newMsg[28]}${
			newMsg[29]
		}${newMsg[30]}${newMsg[31]}${newMsg[32]}`;
		//
		data = {
			id: null,
			date: nWeeks,
			time: time,
			lon: lon,
			lat: lat,
			syrusID: "Avengers"
		};

		gpsModel.insertRaster(data, function(error, data) {
			//si el usuario se ha insertado correctamente mostramos su info
			// if (data && data.insertId) {
			// 	console.log("/users/" + data.insertId);
			// } else {
			// 	console.log({ msg: "Error" });
			// }
		});
		data = JSON.stringify(data);
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

app.get("/hist", (req, res) => {
	let dataN = {
		fDate: req.fDate,
		lDate: req.lDate,
		fHour: req.fHour,
		lHour: req.lHour
	};
	let bounds;
	res.json(bounds);
});

app.get("/coord", (req, res) => {
	console.log(data);
	res.json(`${data}`);
});

app.listen(4000, () => {
	console.log("Server on");
});

server.bind(4001);
