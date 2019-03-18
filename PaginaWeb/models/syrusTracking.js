//llamamos al paquete mysql que hemos instalado
var mysql = require("mysql"),
	//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
	connection = mysql.createConnection({
		host: "avengers.cc2vb3ot4m30.us-east-1.rds.amazonaws.com",
		user: "avenger",
		password: "avenger0102",
		database: "gps"
	});

//creamos un objeto para ir almacenando todo lo que necesitemos
let gpsModel = {};

//obtenemos todos los usuarios
gpsModel.getRasters = function(callback) {
	if (connection) {
		connection.query("SELECT * FROM `GPS-tracking` ORDER BY id", function(
			error,
			rows
		) {
			if (error) {
				throw error;
			} else {
				callback(null, rows);
			}
		});
	}
};

//obtenemos un usuario por su id
gpsModel.getRaster = function(id, callback) {
	if (connection) {
		var sql =
			"SELECT * FROM `GPS-tracking` WHERE id = " + connection.escape(id);
		connection.query(sql, function(error, row) {
			if (error) {
				throw error;
			} else {
				callback(null, row);
			}
		});
	}
};

//añadir un nuevo usuario
gpsModel.insertRaster = function(gpsData, callback) {
	if (connection) {
		// INSERT INTO `gps`.`GPS-Tracking` (`id`, `Syrus ID`, `GPS-Trama`) VALUES ('1', 'Avengers', '>REV002041663724+1099304-0748281400000032;ID=AVENGERS<');
		connection.query("INSERT INTO `GPS-tracking` SET ?", gpsData, function(
			error,
			result
		) {
			if (error) {
				throw error;
			} else {
				//devolvemos la última id insertada
				callback(null, { insertId: result.insertId });
			}
		});
	}
};

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = gpsModel;
