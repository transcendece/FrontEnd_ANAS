import React from 'react'
import { Message } from '@/app/chat/page';

interface ChatContentProps {
    messages: Message[];
  }

function ChatContent({messages}: ChatContentProps) {
    return (
        <div className="max-h-[80%] h-[80%] px-6 py-1 overflow-y-auto scrollbar-hide">
          {messages.map((message: Message, index: number) => (
            <div key={index} className={`py-2 flex flex-row w-full ${!message.isChatOwner ? "justify-end" : "justify-start"}`}>
              <div className={`bg-white ${!message.isChatOwner ? "order-2" : "order-1"}`}>
                <div>avatar</div>
              </div>
              <div className={`px-2 w-fit py-3 flex flex-col  rounded-lg ${!message.isChatOwner ? "order-1 mr-2 text-white bg-opacity-90 bg-[#E58E27]" : "order-2 ml-2 bg-white bg-opacity-10 text-[#E58E27]"}`}>
                <span className="text-xs ">
                  {message.sentBy}&nbsp;:&nbsp;
                </span>
                <span className="text-md">{message.text}</span>
              </div>
            </div>
          ))}
        </div>
      );
}

export default ChatContent