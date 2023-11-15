'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import ChatHeader from "@/app/components/chatComp/chatHeader"
import ChatContent from "../components/chatComp/chatContent";
import { messages, conversations } from "../components/chatComp/messages";
import ChatInput from "../components/chatComp/chatInput";

export interface Message {
  avatar: string,
  text: string;
  sentBy: string;
  isChatOwner: boolean;
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
}

export default function chat() {

  
  const [selectedConversation, setSelectedConversation] = useState<Conversation [] | null>(conversations);
  const [allMessages, setAllMessages] = useState<Message[]>(selectedConversation.messages || null);
  console.log(allMessages);
  const handleSendMessage = (newMessage: string) => {
    const newChatMessage: Message = {
      avatar:"",
      text: newMessage,
      sentBy: 'owner',
      isChatOwner: true,
    };
    setAllMessages((prevMessages) => [...prevMessages, newChatMessage]);
  }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await fetch('@/app/components/chatComp/message.json');
  //       console.log(response)
  //       const data = await response.json();
  //       setMessages(data);
  //       console.log(messages);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
          <div className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Navbar pageName="chat"/></div>
            <div className=" w-[90%] h-[87%] m-auto">
              <div className="w-full h-full flex justify-between items-center ">
                <div className="w-[35%] h-full bg-[#323232] rounded-xl">
                
                </div>
                <div className="w-[60%] h-full bg-[#323232] rounded-xl">
                  <ChatHeader name="Nems"/>
                  <ChatContent messages={allMessages}/>
                  <ChatInput onSendMessage={handleSendMessage}/>
                </div>
              </div>
            </div>
          </div>

  )
}