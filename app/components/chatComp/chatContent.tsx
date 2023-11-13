import React from 'react'
import { Message } from '@/app/chat/page';

interface ChatContentProps {
    messages: Message[];
  }

function chatContent({messages}: ChatContentProps) {
    return (
        <div className="max-h-64 h-64 px-6 py-1 overflow-auto">
          {messages.map((message: Message, index: number) => (
            <div key={index} className={`py-2 flex flex-row w-full ${message.isChatOwner ? "justify-end" : "justify-start"}`}>
              <div className={`${message.isChatOwner ? "order-2" : "order-1"}`}>
                <div>avatar</div>
              </div>
              <div className={`px-2 w-fit py-3 flex flex-col bg-[#323232] rounded-lg text-white ${message.isChatOwner ? "order-1 mr-2" : "order-2 ml-2"}`}>
                <span className="text-xs text-gray-200">
                  {message.sentBy}&nbsp;:&nbsp;
                </span>
                <span className="text-md">{message.text}</span>
              </div>
            </div>
          ))}
        </div>
      );
}

export default chatContent