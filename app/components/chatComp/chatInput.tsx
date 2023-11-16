'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { RiSendPlane2Fill } from "react-icons/ri";
import { socket } from './socket';
import { io } from 'socket.io-client';
import { Conversation } from '@/app/Slices/chatSlice';
import axios from 'axios';

export interface chatInputProps {
  onSendMessage: (message: string) => void;
  conversation: Conversation;
}

function ChatInput({onSendMessage, conversation}: chatInputProps) {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      socket.emit('SendMessage', {
        "content" : message,
        "senderId" : "iel-bakk",
        "recieverId" : "abigeddi",
      });
      onSendMessage(message);
      setMessage('');
      try {
        const response = await axios.get('http://localhost:5000/Chat/98861');
  
        if (response.status === 200) {
          console.log('Data getted successfully:', response.data);
          console.log(response.data);
        } else {
          console.error('Data getting failed:', response.data);
        }
      } catch (error) {
        console.error('Error gettng data:', error);
      }
    }
  };

  return (
    <div className='w-full h-20 flex justify-center items-center m-auto border-t border-t-[#E58E27]'>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Send a message ..."
        className="w-[90%] h-[50%] text-[#323232] p-2 border rounded outline-none focus:border-[#E58E27]"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 h-[50%] py-2 bg-[#E58E27] text-white rounded cursor-pointer"
      > <RiSendPlane2Fill />
      </button>
    </div>
  )
}

export default ChatInput