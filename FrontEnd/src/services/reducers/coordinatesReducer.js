// Reducer for database settings

// Import Action types
import { FETCH_DATA } from "../actions/types";

const initialState = {
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
}