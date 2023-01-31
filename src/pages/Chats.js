import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ControlPanel } from '../components/ControlPanel';
import { MessageList } from '../components/MessageList';


export function Chats() {
    return (
      <>
      <MessageList />
      <ControlPanel />
      </>
    )
}