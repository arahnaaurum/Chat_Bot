import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "./actions"

// export const STATUSES = {
//     IDLE: 0,
//     REQUEST: 1,
//     SUCCESS: 2,
//     FAILURE: 3,
//   }

export const initialState = {
      gists: [],
      request: false,
      error: false,
      success: false
  }

export const gistsReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: true,
                error: false,
                success: false
            }

        case GET_GISTS_SUCCESS:
            return {
                ...state,
                gists: action.payload,
                request: false,
                error: false,
                success: true
            }
        
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: false,
                error: true,
                success: false
            }
        
            default:
                return state;
      }
  }