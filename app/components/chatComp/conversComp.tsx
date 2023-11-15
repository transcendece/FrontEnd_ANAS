import React from 'react'
import { conversations } from './messages'
import { Conversation, Message } from '@/app/chat/page';

interface chatConversProps {
    conversation: Conversation;
}

function ConversComp({conversation}: chatConversProps) {
    console.log(typeof(conversation.messages))
    const content:string | undefined = conversation.messages.at(conversation.messages.length - 1)?.text;
    const avatar:string | undefined = conversation.messages.at(conversation.messages.length - 1)?.avatar;
    const sender:string | undefined = conversation.messages.at(conversation.messages.length - 1)?.sentBy;
    // const avatar:string | undefined = conversation.messages.at(conversation.messages.length - 1)?.avatar;

  return (
    <div className='flex justify-between p-2'>
        <div className='flex '>
            <div className='w-16'>{avatar}</div>
            <div className='w-32 h-12 flex items-start justify-start flex-col'>
                <div className='flex-none'>{sender}</div>
                <div className='max-w-[200px] truncate'>{content}</div>
            </div>
        </div>
        <div>online</div>
    </div>
  )
}

export default ConversComp