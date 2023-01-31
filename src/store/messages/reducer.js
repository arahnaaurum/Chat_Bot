import { ADD_MESSAGE, UPDATE_MESSAGES } from "./actions"

const initialState = {
    messageList: {}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { chatId, message } = action.payload;
            const currentList = state.messageList[chatId] || [];
           
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...currentList,
                        {
                            ...message,
                            id: `${chatId}${currentList.length}`
                        }
                    ]
                }
            }

            case UPDATE_MESSAGES:
                return {
                    ...state,
                    messageList: {
                        ...state.messageList,
                        [action.payload.chatId]: action.payload.messages
                    }
                }

        default:
            return state
    }
}