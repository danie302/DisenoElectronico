//Dependecies
const express = require("express");
const router = express.Router();

// Import models
const callsModel = require("../connection");

// Function to convert HEX to ASCII
function hex_to_ascii(str1) {
	var hex = str1.toString();
	var str = "";
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}
// Function to convert ASCII to HEX
function ascii_to_hexa(str) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n++) {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	}
	return arr1.join("");
}

// @route GET /api/calls
// @desc Test posts route
// @access Public
router.get("/calls", (req, res) => {
	callsModel.getCalls((err, data) => {
		data2 = [];
		data = JSON.parse(JSON.stringify(data));
		data.map((info, index) => {
			info = hex_to_ascii(info.payload);
			data2[index] = info.split(":");
		});
		res.json(data2);
	});
});

// @route GET /api/deleteCall
// @desc Test posts route
// @access Public
router.post("/deleteCall", (req, res) => {
	let data = ascii_to_hexa(req.body.payload);
	console.log(data);
	callsModel.deleteCall(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json(err);
		} else {
			console.log("Affected Rows: " + result.affectedRows);
			res.json(result);
		}
	});
});

module.exports = router;
