import React from 'react'
import { useState } from 'react';
import { Conversation } from '@/app/chat/page';
import { conversations } from './messages';


interface chatConversProps {
    conversation: Conversation;
}

function conversations({conversation}:chatConversProps) {
    const [selectConvId, setSelectConvId] = useState<number>(1);

  return (
    <div className="flex flex-col  h-full w-[30%] rounded-xl">
      <div className="h-20 py-3 border-b rounded-lg bg-[#323232] border-b-[#E58E27]">Header</div>
      <div className="h-[95] w-full  overflow-y-auto scrollbar-hide rounded-xl">
          {selectedConv.map((conversation) => (
            <div key={conversation.id} className="h-20 w-full bg-opacity-20 bg-white shadow-sm shadow-white">
              <button
              
              onClick={() => setSelectConvId(conversation.id)}
              className="w-full h-full bg-white bg-opacity-10 transition duration-500 ease-in-out hover:text-orange-500 hover:bg-opacity-100"
              ><ConversComp conversation={conversation}/>
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default conversations