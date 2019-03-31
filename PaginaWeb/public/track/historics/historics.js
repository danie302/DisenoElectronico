// Get dom obejcts
const fDate = document.getElementById("fDate");
const fTime = document.getElementById("fTime");
const lDate = document.getElementById("lDate");
const lTime = document.getElementById("lTime");
const dBtn = document.getElementById("dispBtn");
let lat = 10.99304;
let lon = -74.8281;
let flightPlanCoordinates = [];

function formatdate(date, time) {
	let formDate = `${date.getUTCDate()}-${date.getUTCMonth() +
		1}-${date.getUTCFullYear()} `;
	let formTime = time;
	return {
		formDate,
		formTime
	};
}

function initMap() {
	// Map options
	let opt = {
		zoom: 18,
		center: { lat: parseFloat(lat), lng: parseFloat(lon) }
	};
	// Creating the map
	map = new google.maps.Map(document.getElementById("map"), opt);

	function drawRoad() {
		let flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodisc: true,
			strokeColor: "#FF0000",
			strokeOpacity: 1,
			strokeWeight: 2
		});
		flightPath.setMap(map);
	}
	dBtn.addEventListener("click", () => {
		let nFdate = new Date(fDate.value);
		let nLdate = new Date(lDate.value);
		let dateObj = formatdate(nFdate, fTime.value);
		let dateObj2 = formatdate(nLdate, lTime.value);
		let data = {
			fDate: dateObj.formDate,
			lDate: dateObj2.formDate,
			fTime: dateObj.formTime,
			lTime: dateObj2.formTime
		};
		axios
			.post("/gps/hist", data)
			.then(response => {
				response.data.map((path, index) => {
					flightPlanCoordinates[index] = {
						lat: path.lat,
						lng: path.lon
					};
				});
				console.log(flightPlanCoordinates);
			})
			.then(() => {
				drawRoad();
			})
			.catch(function(error) {
				console.log(error);
			});
	});
}
