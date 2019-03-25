const express = require("express");
const router = express.Router();
//obtenemos el modelo gpsModel con toda la funcionalidad
var gpsModel = require("../models/syrusTracking");

//creamos el ruteo de la aplicación

//mostramos todos los usuarios
router.get("/rasters", function(req, res) {
	gpsModel.getRasters(function(error, data) {
		res.json(200, data);
	});
});

//obtiene un usuario por su id
router.get("/raster/:id", function(req, res) {
	//id del usuario
	let id = req.params.id;
	//solo actualizamos si la id es un número
	if (!isNaN(id)) {
		gpsModel.getRaster(id, function(error, data) {
			//si el usuario existe lo mostramos en formato json
			if (typeof data !== "undefined" && data.length > 0) {
				res.json(200, data);
			}
			//en otro caso mostramos una respuesta conforme no existe
			else {
				res.json(404, { msg: "notExist" });
			}
		});
	}
	//si hay algún error
	else {
		res.json(500, { msg: "Error" });
	}
});

router.post("/hist", (req, res) => {
	let range = {
		firstDate: req.body.fDate,
		lastDate: req.body.lDate,
		firstTime: req.body.fTime,
		lastTime: req.body.lTime
	};

	let rangeDates;
	gpsModel.getRange(range, (err, data) => {
		if (err) {
			throw err;
		} else {
			rangeDates = data;
			res.status(200).json(rangeDates);
		}
	});
});

module.exports = router;
