import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database';
import firebase from '../services/firebase';
import { chatListUpdate } from './chats/actions';
import { updateMessages } from './messages/actions';
import { AUTHORS, BOTANSWERS } from "../constants/common";

export const addChatWithFB = (chatName) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: chatName }).then(res => {
        console.log(res);
    });
}

export const deleteChatwithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messageRef = ref (db, `/messages/${id}`);
    remove(chatRef).then(res => {
        console.log(res);
    })
    remove(messageRef).then(res => {
        console.log(res);
    })
}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));
    })
}

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg));    
        }
    })
}

export const addMessageWithFB = (chatId, message) => async() => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then(res => {
        if (message.author !== AUTHORS.bot) {
            const botMessage = {
                author: AUTHORS.bot,
                text: BOTANSWERS[Math.floor(Math.random() * BOTANSWERS.length)]
            }
            const messageBotRef = ref(db, `/messages/${chatId}`);
            const newMessageBotRef = push(messageBotRef);
            setTimeout(() => set(newMessageBotRef, botMessage), 2000)
            }
    });
}