import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import FaceIcon from '@mui/icons-material/Face';
import AdbIcon from '@mui/icons-material/Adb';
import { ChatList } from '../components/ChatList';
import { useEffect } from 'react';
import { getMessagesByChatIdWithFB } from '../store/middleware';

export const MessageList = () => {
  const allMessages = useSelector(state => state.messages.messageList)
  const { chatId } = useParams();
  const messages = allMessages[chatId];
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getMessagesByChatIdWithFB(chatId));
  }, [chatId]);

    return (
        <div className="chat_container">
          <div className="chat_sidelist">
            <ChatList />
          </div>
        <ul className='message_list'>
          {messages?.map((item, index) => (
            <li className='message_box' key={index}>
              <div className='message_text'>{item.text}</div>
              <div className='message_author'>
                {item.author !== "bot"? <FaceIcon color = "secondary" /> : <AdbIcon color = "secondary" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )


}