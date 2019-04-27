// Dependencies
import axios from "axios";

// Import Action types
import {
	GET_PROFILE,
	PROFILE_LOADING,
	CLEAR_CURRENT_PROFILE,
	GET_TRUCKS,
	CLEAR_ERRORS
} from "./types";

// Add new truck
export const addTrucks = (truckData, history) => dispatch => {
	console.log(truckData);
	axios
		.post("/api/v1/user/addTruck", truckData)
		.then(res => history.push("/dashboard"));
};

// Get user trucks list
export const getUserTrucks = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get("/api/v1/user/getTrucks")
		.then(res => {
			dispatch({
				type: GET_TRUCKS,
				payload: res.data.trucks
			});
		})
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		);
};

// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	};
};

// Clear profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
