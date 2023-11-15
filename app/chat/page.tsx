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

  
  const [selectedConv, setSelectedConv] = useState<Conversation [] >(conversations);
  const [allMessages, setAllMessages] = useState<Message[]>(selectedConv[0].messages);

  const [selectConvId, setSelectConvId] = useState<number>(1);

  console.log(allMessages);
  const handleSendMessage = (newMessage: string) => {
    if (selectConvId !== null) {
      const updatedConversations = selectedConv.map((conversation) =>
        conversation.id === selectConvId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                {
                  avatar: '',
                  text: newMessage,
                  sentBy: 'owner',
                  isChatOwner: true,
                },
              ],
            }
          : conversation
      );

      setSelectedConv(updatedConversations);
    // const newChatMessage: Message = {
    //   avatar:"",
    //   text: newMessage,
    //   sentBy: 'owner',
    //   isChatOwner: true,
    // };
    // setAllMessages((prevMessages) => [...prevMessages, newChatMessage]);
    }
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
                {selectedConv.map((conversation) => (
                    <div className="h-20">
                      <button
                      key={conversation.id}
                      onClick={() => setSelectConvId(conversation.id)}
                      className=""
                      >{conversation.title}
                      </button>
                    </div>
                  ))}

                </div>
                <div className="w-[60%] h-full bg-[#323232] rounded-xl">
                  <ChatHeader name="Nems"/>
                  <ChatContent messages={selectedConv.find((conversation) => conversation.id === selectConvId)?.messages || []}/>
                  <ChatInput onSendMessage={handleSendMessage}/>
                </div>
              </div>
            </div>
          </div>

  )
}