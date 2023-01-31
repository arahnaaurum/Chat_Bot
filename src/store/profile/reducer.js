import { SHOW_NAME, CHANGE_NAME } from "./actions"

const initialState = {
    showName: false,
    name: 'User'
  }
  
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_NAME:
        return {
          ...state,
          showName: !state.showName
        }
      
        case CHANGE_NAME:
        return {
          ...state,
          name: action.payload
        }

        default:
          return state
    }

  }