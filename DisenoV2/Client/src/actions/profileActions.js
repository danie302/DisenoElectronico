// Dependencies
import axios from "axios";

// Import Action types
import {
	GET_PROFILE,
	PROFILE_LOADING,
	GET_ERRORS,
	CLEAR_CURRENT_PROFILE,
	GET_PROFILES,
	GET_TRUCKS,
	CLEAR_ERRORS
} from "./types";

// Get current profile
export const getUserTrucks = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get("/api/v1/user/getTrucks")
		.then(res => {
			dispatch({
				type: GET_TRUCKS,
				payload: res.data
			});
			console.log(res.data.trucks);
		})
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		);
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
	dispatch(clearErrors());
	axios
		.post("/api/profile", profileData)
		.then(res => history.push("/dashboard"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Profiles
export const getProfiles = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get("/api/profile/all")
		.then(res =>
			dispatch({
				type: GET_PROFILES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_PROFILES,
				payload: null
			})
		);
};

// Get profile by handle
export const getProfilesByHandle = handle => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get(`/api/profile/handle/${handle}`)
		.then(res =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: null
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
