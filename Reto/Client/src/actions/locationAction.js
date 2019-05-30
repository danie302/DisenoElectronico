// Import Actions
import { GET_LOCATIONS } from "./types.js";

export const getLocations = () => dispatch => {
	fetch("http://localhost:4000/api/calls", {
		headers: { "Access-Control-Allow-Origin": "localhost:4000/" }
	})
		.then(res => {
			return res.json();
		})
		.then(data => {
			dispatch({
				type: GET_LOCATIONS,
				payload: data
			});
		});
};

export const deleteLocation = payload => dispatch => {
	console.log(payload);

	fetch("http://localhost:4000/api/deleteCall", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "localhost:4000/"
		},
		body: JSON.stringify({ payload })
	});
};
