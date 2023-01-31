import { ADD_CHAT, CHATS_UPDATE, DELETE_CHAT } from "./actions"
const intialState = {
    chatList: []
}

export const chatsReducer = (state=intialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            };
        
        case DELETE_CHAT:
            return {
                ...state,
                chatList:[
                    ...state.chatList.slice(0, action.payload),
                    ...state.chatList.slice(action.payload+1)
                ]
            }
        
        case CHATS_UPDATE:
            return {
                ...state,
                chatList: action.payload
            }

        default:
            return state
    }
}