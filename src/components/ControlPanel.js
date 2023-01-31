import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithThunk } from '../store/messages/actions';
import { TextField, Fab } from "@mui/material";
import { Send } from "@mui/icons-material";
import { addMessageWithFB } from '../store/middleware';

export function ControlPanel() {
  const [value, setValue] = useState('');
  const { chatId } = useParams()
  const { name } = useSelector(state => state.profile);
  const dispatch = useDispatch()

  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const updateList = () => {
    if (value !== '') {
      const message = {
        text: value,
        author: name
      }
      /* dispatch(addMessageWithThunk(chatId, message)) */
      dispatch(addMessageWithFB(chatId, message))
      setValue ('');
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateList();
    }
  }

  // useEffect(()=>{
  //   let timer
  //   let botanswer = BOTANSWERS[Math.floor(Math.random() * BOTANSWERS.length)]
  //   if (messageList.length>0 && messageList[messageList.length-1].author === AUTHORS.me){
  //     timer = setInterval(() => {
  //       setList([...messageList, {
  //         text: botanswer,
  //         author: AUTHORS.bot
  //       }]);
  //     }, 1500)
  //   }
  //   return () => {clearInterval(timer);
  //     }
  // }, [messageList])

    return <div className = "message-input">
    <TextField autoFocus
      style={{ margin: "20px", backgroundColor: 'white' }}
      id = "outlined-basic"
      label = "Message"
      variant = "outlined"
      className='message_field' type="text" name="author" value={value} onChange={handleValue} onKeyDown={handleKeyDown}/>
    <Fab
      id = "sendBTN"
      style={{  margin: "20px" }}
      color = "primary" className='message_button' onClick={updateList}> 
    <Send/>
    </Fab>
  </div>
  }